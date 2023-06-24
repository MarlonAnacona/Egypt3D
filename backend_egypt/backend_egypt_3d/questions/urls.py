from django.urls import path
from . import views

app_name='answers'

urlpatterns = [ 
    path('for-quiz/', views.ListQuizQuestionsView.as_view(), name='list_questions_associated_whit_given_quiz'),
    path('<int:question_id>/answers/', views.ListQuestionAnswersView.as_view(), name='list_answers_associated_whit_given_question'),
    path('<int:question_id>/correct-answers/', views.ListQuestionCorrectAnswersView.as_view(), name='list_correct_answers_associated_whit_given_question'),
]