from rest_framework import serializers
from .models import Question, Answer, QuestionCorrectAnswer, QuizResultCorrectQuestion


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = '__all__' 
        extra_kwargs = {
            'id': {'read_only': True},
             }
        

class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = '__all__' 
        extra_kwargs = {
            'id': {'read_only': True},
             }        
        

class QuestionCorrectAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionCorrectAnswer
        fields = '__all__' 
        extra_kwargs = {
            'id': {'read_only': True},
             }
        

class QuizResultCorrectQuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuizResultCorrectQuestion
        fields = '__all__' 
        extra_kwargs = {
            'id': {'read_only': True},
             }