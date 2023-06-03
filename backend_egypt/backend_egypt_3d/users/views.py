from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserProfileSerializer
from .models import UserProfile

# Create your views here.


class CreateUserProfileView(generics.CreateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]


class RetriveUserProfileInfoView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]
    queryset = UserProfile.objects.all()
    lookup_field = 'pk'

class UpdateUserProfileView(generics.UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'pk'
    