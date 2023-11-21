from django.db import models

# Create your models here.
class feedback(models.Model):
    person_name = models.CharField(max_length=50)
    comment = models.TextField()

    def __str__(self):
        return self.person_name

class challenge_prompt(models.Model):
    name = models.CharField(max_length=100)
    status = models.BooleanField()
    feedback = models.ForeignKey(feedback, on_delete = models.CASCADE, related_name = 'review')
    prompt = models.TextField()

    def __str__ (self):
        return self.name
    
class Sei(models.Model):
    challenge_prompt = models.ForeignKey(challenge_prompt, on_delete = models.CASCADE, related_name = 'prompts')

