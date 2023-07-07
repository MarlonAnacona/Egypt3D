from django.urls import path
from . import views

app_name='quizzes'

urlpatterns = [ 
    path('list/', views.ListQuizesView.as_view(), name='list_all_quizes'),
    path('create-result/', views.CreateQuizResultView.as_view(), name='create_quiz_result'),
    path('quiz-results/', views.ListQuizzesResultsView.as_view(), name='list_quizzes_results'),
]