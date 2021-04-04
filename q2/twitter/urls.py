from django.urls import path

from . import views

urlpatterns = [
    path('get_peoples/', views.get_peoples, name='get_peoples'),
    path('tweet/', views.tweet, name='tweet'),
    path('get_tweets/', views.get_tweets, name='get_tweets'),
    path('people/', views.people, name='people'),
]