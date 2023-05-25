from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import UserProfile


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         customer = Customer.objects.get(email=user.email)
#         # Add custom claims            
#         token['email'] = customer.email,
#         token['phone_number'] = customer.phone_number,      
#         # ...

#         return token   


class UserProfileSerializer(serializers.ModelSerializer):    
    
    class Meta:
        model = UserProfile
        fields = ['id',
                  'username',
                  'email',
                  'password', 
                  'profile_image'  
                 ]        
        extra_kwargs = {
            'id': {'read_only': True},
            'password': {'write_only': True},
             }
        
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user_profile = UserProfile(**validated_data)
        user_profile.set_password(password)
        user_profile.save()
        
        return user_profile