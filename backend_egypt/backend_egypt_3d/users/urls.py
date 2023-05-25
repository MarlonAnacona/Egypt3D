from django.urls import path
from . import views

app_name='users'

urlpatterns = [ 
    # path('api/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),    
    path('create-profile/', views.CreateUserProfileView.as_view(), name='create new user profile')
    
]