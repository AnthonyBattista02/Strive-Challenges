from django.shortcuts import render
from rest_framework import generics
from .serializers import SeiSerializer, ChallengePromptSerializer, FeedbackSerializer, UxSerializer
from .models import Sei, challenge_prompt, feedback, Ux
# Create your views here.

class SeiList(generics.ListCreateAPIView):
    queryset = Sei.objects.all()
    serializer_class = SeiSerializer

class SeiDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sei.objects.all()
    serializer_class = SeiSerializer

class Challenge_PromptList(generics.ListCreateAPIView):
    queryset = challenge_prompt.objects.all()
    serializer_class = ChallengePromptSerializer

class Challenge_romptDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = challenge_prompt.objects.all()
    serializer_class = ChallengePromptSerializer

class FeedbackList(generics.ListCreateAPIView):
    queryset = feedback.objects.all()
    serializer_class = FeedbackSerializer

class FeedbackDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = feedback.objects.all()
    serializer_class = FeedbackSerializer

class UxList(generics.ListCreateAPIView):
    queryset = Ux.objects.all()
    serializer_class = UxSerializer

class UxDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ux.objects.all()
    serializer_class = UxSerializer
