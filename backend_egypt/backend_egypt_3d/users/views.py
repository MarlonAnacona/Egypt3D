from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserProfileSerializer

# Create your views here.


class CreateUserProfileView(generics.CreateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]