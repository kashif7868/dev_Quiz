from django.db import models

class user(models.Model):
    name = models.CharField(max_length=100)
    subjectName = models.CharField(max_length=100)
    score = models.IntegerField()
