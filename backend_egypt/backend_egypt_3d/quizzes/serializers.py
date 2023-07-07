from rest_framework import serializers
from .models import Quiz, QuizResult


class QuizSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = '__all__' 
        extra_kwargs = {
            'id': {'read_only': True},
             }
        

class QuizResultSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuizResult
        fields = '__all__' 
        extra_kwargs = {
            'id': {'read_only': True},
             }        
        

    def create(self, validated_data):
        quiz_id = validated_data.get("quiz_id")
        user_id = validated_data.get("user_id")

        # Check if a row with the given quiz_id and user_id already exists
        if QuizResult.objects.filter(quiz_id=quiz_id, user_id=user_id).exists():
            raise serializers.ValidationError("A result for this quiz and user already exists.")

        return super().create(validated_data)