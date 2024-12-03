from users.models import Profile
from users.serializers import ProfileSerializer, UserSerialzer
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'profiles': reverse('profiles-list', request=request, format=format),
        'add_user': reverse('user-add', request=request, format=format),
    })

class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzer
    
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzer

class UserAdd(APIView):
    def post(self, request, format=None):

        serializerOne = UserSerialzer(data=request.data)
        if serializerOne.is_valid():
            serializerOne.save()
        else:
            return Response(serializerOne.errors, status=status.HTTP_400_BAD_REQUEST)

        serialzerTwo = ProfileSerializer(data=request.data)

        if serialzerTwo.is_valid():
            serialzerTwo.save(owner=User.objects.filter(username = request.data["username"]).first())
            return Response(serialzerTwo.data, status=status.HTTP_201_CREATED)

        return Response(serialzerTwo.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleProfile(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(owner = user)
