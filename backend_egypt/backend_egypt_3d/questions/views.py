from rest_framework import generics, permissions
from .serializers import QuestionSerializer, AnswerSerializer, QuestionCorrectAnswerSerializer, QuizResultCorrectQuestionSerializer
from .models import Question, Answer, QuestionCorrectAnswer, QuizResultCorrectQuestion

# Create your views here.


class ListQuizQuestionsView(generics.ListAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        quizID = self.request.query_params.get('quiz_id')
        return Question.objects.filter(quiz_id= quizID)


class ListQuestionAnswersView(generics.ListAPIView):
    serializer_class = AnswerSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        questionID = self.kwargs.get('question_id')
        return Answer.objects.filter(question_id= questionID)
    

class ListQuestionCorrectAnswersView(generics.ListAPIView):
    serializer_class = QuestionCorrectAnswerSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        questionID = self.kwargs.get('question_id')
        return QuestionCorrectAnswer.objects.filter(question_id= questionID)
    


class RetriveView(generics.ListAPIView):
    serializer_class = QuizResultCorrectQuestionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        questionID = self.kwargs.get('question_id')
        return QuestionCorrectAnswer.objects.filter(question_id= questionID)
    