from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from . import views

app_name='users'

urlpatterns = [ 
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   
    path('create-profile/', views.CreateUserProfileView.as_view(), name='create new user profile'),
    path('profile/<int:pk>', views.RetriveUserProfileInfoView.as_view(), name='retrive user profile info'),
    path('profile/update/<int:pk>', views.UpdateUserProfileView.as_view(), name='update user profile info'),
    path('default-pictures/', views.ListDefaultProfilePictures.as_view(), name='get all default profile pictures'),
    #path('avatar/<int:pk>', views.RetriveAvatarView.as_view(), name='get avatar with id'),

    path('change-password/', views.ChangePasswordView.as_view(), name='change current password'),
    path('custom-profile-picture/', views.ChangeProfilePictureCustomImageView.as_view(), name='change profile pic to custom img'),
]