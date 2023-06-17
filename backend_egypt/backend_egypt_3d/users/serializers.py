from django.core import validators
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import UserProfile, ProfilePicture




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
    

    def update(self, instance, validated_data):
        print(instance.password)
        if(validated_data.get('password', None)):
            instance.set_password(validated_data.get('password'))
        
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)        
        instance.profile_image = validated_data.get('profile_image', instance.profile_image)
        instance.save()

        print(instance.password)

        return instance
    



class ProfilePictureSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProfilePicture
        fields = '__all__' 


class ChangePasswordSerializer(serializers.ModelSerializer):

    current_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, validators=[validators.MinLengthValidator(8)])


    class Meta:
        model = UserProfile
        fields = ['current_password', 'new_password']


    def validate(self, attrs):
        user = self.context['request'].user
        current_password = attrs.get('current_password')

        if not user.check_password(current_password):
            raise serializers.ValidationError("Invalid current password.")

        return attrs


    def save(self):
        user = self.context['request'].user
        user.set_password(self.validated_data['new_password'])
        user.save()




# class AvatarSerializer(serializers.ModelSerializer):    
    
#     class Meta:
#         model = Avatar
#         fields = '__all__' 