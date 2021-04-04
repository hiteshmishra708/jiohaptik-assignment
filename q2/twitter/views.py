from django.shortcuts import render
from .models import People, Response, Tweet
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
import json

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_peoples(request):
    return Response([obj.get_people_obj() for obj in People.objects.exclude(id=request.user.people.id)]).get_obj()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet(request):
    json_data = json.loads(request.body)
    tweet = Tweet.objects.create(people=request.user.people, tweet=json_data['tweet'])
    return Response(request.user.people.get_tweets()).get_obj()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tweets(request):
    return Response(request.user.people.get_tweets()).get_obj()