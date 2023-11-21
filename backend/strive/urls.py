from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('sei/', views.SeiList.as_view(), name='sei_list'),
    path('sei/<int:pk>', views.SeiDetail.as_view(), name='sei_detail'),
    path('challenge_prompts/', views.Challenge_PromptList.as_view(), name='challenge_prompts_list'),
    path('challenge_prompts/<int:pk>', views.Challenge_romptDetail.as_view(), name='challenge_prompts_detail'),
    path('feedback/', views.FeedbackList.as_view(), name='feedback_list'),
    path('feedback/<int:pk>', views.FeedbackDetail.as_view(), name='feedback_detail'),
    path('ux/', views.UxList.as_view(), name='ux_list'),
    path('ux/<int:pk>', views.UxDetail.as_view(), name='ux_detail'),
    
]