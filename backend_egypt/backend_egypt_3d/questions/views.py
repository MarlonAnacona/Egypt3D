from rest_framework import generics, permissions
from django.core.exceptions import ObjectDoesNotExist
from quizzes.models import Quiz
from .serializers import QuestionSerializer, AnswerSerializer, QuestionCorrectAnswerSerializer, QuizResultCorrectQuestionSerializer
from .models import Question, Answer, QuestionCorrectAnswer, QuizResultCorrectQuestion

# Create your views here.


class ListQuizQuestionsView(generics.ListAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        quizID = self.request.query_params.get('quiz_id')
        
        try:
            final_quiz = Quiz.objects.get(subject= 'final')
            quizID = int(quizID)

            if(final_quiz.id == quizID):
                return self.get_questions_for_final_quiz()

        except ObjectDoesNotExist:
            raise ObjectDoesNotExist("The final quiz does NOT exist")


        return Question.objects.filter(quiz_id= quizID)
    

    def get_questions_for_final_quiz(self):
        
        quizzes = Quiz.objects.order_by('?')
        questions = Question.objects.order_by('?')
        output = Question.objects.none()

        for quiz in quizzes:
            random_ques = questions.filter(quiz_id= quiz.id)[:2]
            output = output.union(random_ques)

        return output
            


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
    