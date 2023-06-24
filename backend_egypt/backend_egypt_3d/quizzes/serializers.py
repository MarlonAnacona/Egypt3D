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