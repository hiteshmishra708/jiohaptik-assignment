from django.shortcuts import render
from .models import People, Response, Tweet, FollowRecord
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
import json

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_peoples(request):
    return Response([obj.get_people_obj(False, request.user.people) for obj in People.objects.exclude(id=request.user.people.id)]).get_obj()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet(request):
    json_data = json.loads(request.body)
    tweet = Tweet.objects.create(people=request.user.people, tweet=json_data['tweet'])
    return Response(request.user.people.get_all_tweets()).get_obj()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tweets(request):
    return Response(request.user.people.get_all_tweets()).get_obj()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def people(request):
    json_data = json.loads(request.body)
    people = People.objects.get(id=json_data['id'])
    return Response(people.get_people_obj(True, request.user.people)).get_obj()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def follow_unfollow(request):
    json_data = json.loads(request.body)
    people = People.objects.get(id=json_data['id'])
    if json_data['action'] is True:
        follow, created = FollowRecord.objects.get_or_create(followed_by=request.user.people, people=people)
        if created:
            follow.save()
    else:
        follow = FollowRecord.objects.get(followed_by=request.user.people, people=people)
        follow.delete()
    return Response({'status': True}).get_obj()