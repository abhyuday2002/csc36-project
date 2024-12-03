from rest_framework import serializers
from users.models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Profile
        fields=['url', 'id', 'name', 'owner', 'email', 'phoneNumber']
    
class UserSerialzer(serializers.HyperlinkedModelSerializer):
    # things = serializers.PrimaryKeyRelatedField(many = True, queryset=Profile.objects.all())
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'password']