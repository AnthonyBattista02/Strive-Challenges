from django.contrib import admin
from .models import Sei, challenge_prompt, feedback, Ux

admin.site.register(Sei)
admin.site.register(Ux)
admin.site.register(challenge_prompt)
admin.site.register(feedback)