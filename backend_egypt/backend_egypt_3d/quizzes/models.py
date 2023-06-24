from django.db import models
from users.models import UserProfile

# Create your models here.
class Quiz(models.Model):
    subject = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField()

    def __str__(self):
        return f'{self.subject}'

class QuizResult(models.Model):
    quiz_id = models.ForeignKey(Quiz, null=False, blank=False, on_delete=models.CASCADE)
    user_id = models.ForeignKey(UserProfile, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self):
        return f'quiz: {self.quiz_id.subject} , user: {self.user_id.email}'
