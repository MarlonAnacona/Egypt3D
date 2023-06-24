from rest_framework import generics, permissions, status
from .serializers import QuizResultSerializer, QuizSerializer
from .models import Quiz, QuizResult

# Create your views here.


class ListQuizesView(generics.ListAPIView):
    serializer_class = QuizSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Quiz.objects.all()