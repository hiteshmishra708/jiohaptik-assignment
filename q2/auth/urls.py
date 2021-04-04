from django.urls import path
from auth.views import RegisterView
from .views import auth_view

urlpatterns = [
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('login/', auth_view, name='login'),
]

