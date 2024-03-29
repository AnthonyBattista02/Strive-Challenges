from rest_framework import serializers
from .models import Sei, challenge_prompt, feedback, Ux

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = feedback
        fields = '__all__'

class ChallengePromptSerializer(serializers.ModelSerializer):
    feedback = FeedbackSerializer()

    class Meta:
        model = challenge_prompt
        fields = '__all__'
    

class SeiSerializer(serializers.ModelSerializer):
    challenge_prompt = ChallengePromptSerializer()

    class Meta:
        model = Sei
        fields = '__all__'

class UxSerializer(serializers.ModelSerializer):
    challenge_prompt = ChallengePromptSerializer()

    class Meta:
        model = Ux
        fields = '__all__'