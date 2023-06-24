from django.contrib import admin
from .models import Question, QuestionCorrectAnswer, Answer, QuizResultCorrectQuestion
# Register your models here.

admin.site.register([Question,
                    QuestionCorrectAnswer,
                    Answer,
                    QuizResultCorrectQuestion
                     ]
                    )
