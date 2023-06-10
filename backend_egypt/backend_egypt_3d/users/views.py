from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserProfileSerializer, AvatarSerializer
from .models import UserProfile, Avatar

# Create your views here.


class CreateUserProfileView(generics.CreateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]


class RetriveUserProfileInfoView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserProfile.objects.all()
    lookup_field = 'pk'

class UpdateUserProfileView(generics.UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pk'
    

class ListAvatarsView(generics.ListAPIView):
    serializer_class = AvatarSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Avatar.objects.all()
    