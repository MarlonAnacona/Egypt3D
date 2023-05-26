from django.db import models
from quizzes.models import Quiz, QuizResult

# Create your models here.
class Question(models.Model):
    question_text = models.TextField()
    quiz_id = models.ForeignKey(Quiz, null=False, blank=False, on_delete=models.CASCADE)


class Answer(models.Model):
    answer_text = models.TextField()
    question_id = models.ForeignKey(Question, null=False, blank=False, on_delete=models.CASCADE)


class QuestionCorrectAnswer(models.Model):
    question_id = models.ForeignKey(Question, null=False, blank=False, on_delete=models.CASCADE)
    answer_id = models.ForeignKey(Answer, null=False, blank=False, on_delete=models.CASCADE)


class QuizResultCorrectQuestion(models.Model):
    quiz_result_id = models.ForeignKey(QuizResult, null=False, blank=False, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Question, null=False, blank=False, on_delete=models.CASCADE)