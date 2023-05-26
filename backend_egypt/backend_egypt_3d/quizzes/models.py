from django.db import models
from users.models import UserProfile

# Create your models here.
class Quiz(models.Model):
    subject = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField()


class QuizResult(models.Model):
    quiz_id = models.ForeignKey(Quiz, null=False, blank=False, on_delete=models.CASCADE)
    user_id = models.ForeignKey(UserProfile, null=False, blank=False, on_delete=models.CASCADE)
