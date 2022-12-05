from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required


class UserLoginView(LoginView):
    template_name = 'users/auth.html'
    success_url = reverse_lazy('users:home')

class HomeView(TemplateView):
    template_name = 'index.html'

