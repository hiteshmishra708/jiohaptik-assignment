from django.db import models
from django.contrib.auth.models import User
from django.http import JsonResponse

class People(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)

    def __str__(self):
        return '%s %s' % (self.user.first_name, self.user.last_name)

    def get_obj(self):
        return {
            'id': self.id,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'email': self.user.email,
        }
    
    def get_people_obj(self):
        return {
            'id': self.id,
            'full_name': self.get_full_name()
        }

    def get_tweets(self):
        return [obj.get_obj() for obj in self.tweet_set.all().order_by('-id')]

    def get_full_name(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)

class FollowRecord(models.Model):
    followed_by = models.ForeignKey(People, on_delete=models.CASCADE, related_name='followed_by')
    people = models.ForeignKey(People, on_delete=models.CASCADE, related_name='people')
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.followed_by.user.first_name

class Tweet(models.Model):
    people = models.ForeignKey(People, on_delete=models.CASCADE)
    tweet = models.CharField(max_length=140)
    likes = models.IntegerField(default=0)
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.message

    def get_obj(self):
        return {
            'tweet': self.tweet,
            'full_name': self.people.get_full_name(),
            'created': self.created
        }

class Response():
    def __init__(self, data, status_code=200, message=None):
        self.data = data
        self.status_code = status_code

    def get_obj(self):
        return JsonResponse({
            'status_code': self.status_code,
            'data': self.data,
        })