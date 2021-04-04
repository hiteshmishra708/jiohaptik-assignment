from django.contrib import admin
from .models import People, FollowRecord, Tweet

admin.site.register(People)
admin.site.register(FollowRecord)
admin.site.register(Tweet)