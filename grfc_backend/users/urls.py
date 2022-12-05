from django.urls import path

from django.views.generic import TemplateView
from django.contrib.auth.views import LoginView
from .views import UserLoginView, HomeView

app_name = 'users'

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('auth/', LoginView.as_view(template_name='users/auth.html'), name='login'),
    path('filter/', TemplateView.as_view(template_name='index.html'), name='filter'),
]
