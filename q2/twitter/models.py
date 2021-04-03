from django.db import models
from django.contrib.auth.models import User
from django.http import JsonResponse

class People(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # followed = ArrayField(models.IntegerField(), blank=True, default=[])
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

class Tweet(models.Model):
    message = models.CharField(max_length=140)
    likes = models.IntegerField(default=0)
    people = models.ForeignKey(People, on_delete=models.CASCADE)
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.title

class Response():
    def __init__(self, data, status_code=200, message=None):
        self.data = data
        self.status_code = status_code

    def get_obj(self):
        return JsonResponse({
            'status_code': self.status_code,
            'data': self.data,
        })