from django.urls import path
from . import views

app_name='quizzes'

urlpatterns = [ 
    path('list/', views.ListQuizesView.as_view(), name='list_all_quizes'),
]