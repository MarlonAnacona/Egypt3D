from rest_framework.response import Response
from rest_framework import generics, permissions, status
from .serializers import UserProfileSerializer, ProfilePictureSerializer, ChangePasswordSerializer
from .models import UserProfile, ProfilePicture

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


class ListDefaultProfilePictures(generics.ListAPIView):
    serializer_class = ProfilePictureSerializer
    permission_classes = [permissions.AllowAny]
    queryset = ProfilePicture.objects.filter(is_default_image=True)
    
# class RetriveProfilePictureView(generics.RetrieveAPIView):
#     serializer_class = AvatarSerializer
#     permission_classes = [permissions.AllowAny]
#     queryset = ProfilePicture.objects.all()
#     lookup_field = 'pk'


class ChangePasswordView(generics.GenericAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response({'detail': 'Password changed successfully.'}, status=status.HTTP_200_OK)
