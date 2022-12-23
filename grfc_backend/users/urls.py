from django.urls import path

from django.views.generic import TemplateView
from django.contrib.auth.views import LoginView, LogoutView
from .views import UserLoginView, HomeView
from django.contrib.auth.decorators import login_required

app_name = 'users'

urlpatterns = [
    path('', login_required(HomeView.as_view()), name='home'),
    path('auth/', LoginView.as_view(template_name='users/auth.html'), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('filter/', login_required(TemplateView.as_view(template_name='index.html')), name='filter'),
]
