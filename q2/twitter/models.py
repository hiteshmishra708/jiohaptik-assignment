from django.db import models
from django.contrib.auth import user

class People(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)
    followed = ArrayField(models.IntegerField(), blank=True, default=[])
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.user.username