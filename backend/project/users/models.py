from django.db import models

# Create your models here.

class Profile(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=True, default="")
    email = models.CharField(max_length=100, default="")
    phoneNumber = models.IntegerField(default=0)
    owner = models.ForeignKey('auth.User', related_name='profile', on_delete=models.CASCADE)
