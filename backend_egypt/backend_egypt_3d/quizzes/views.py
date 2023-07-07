from rest_framework import generics, permissions, status
from .serializers import QuizResultSerializer, QuizSerializer
from .models import Quiz, QuizResult

# Create your views here.


class ListQuizesView(generics.ListAPIView):
    serializer_class = QuizSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Quiz.objects.all()


class CreateQuizResultView(generics.CreateAPIView):
    serializer_class = QuizResultSerializer
    permission_classes = [permissions.IsAuthenticated]


class ListQuizzesResultsView(generics.ListAPIView):
    serializer_class = QuizResultSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        userID = self.request.query_params.get('user_id')
        return QuizResult.objects.filter(user_id= userID)