from django.urls import path

from . import views

urlpatterns = [
    path('follow_unfollow/', views.follow_unfollow, name='follow_unfollow'),
    path('tweets/', views.Tweets.as_view()),
    path('peoples/', views.Peoples.as_view()),
]