from django.db import models
from django.core import validators
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

# Create your models here.

class CustomerManager(BaseUserManager):
    
    def create_user(self, username, email, password, **extra_fields):
        # Create and save a new user with the given email and password
        user = self.model(username=username, email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user

    def create_superuser(self, username, email, password, **extra_fields):
        # Create and save a new superuser with the given email and password
        extra_fields['is_staff'] = True
        extra_fields['is_superuser'] = True

        user = self.create_user(username=username,
                                email=email,
                                password=password,                    
                                **extra_fields
                                )
        user.save()
        return user




class ProfilePicture(models.Model):
    profile_image = models.ImageField(null=True, blank=True, upload_to='profile_pictures/')
    is_default_image = models.BooleanField(null=False, blank=False, default=False)
    

class UserProfile(AbstractUser, PermissionsMixin):    
    first_name = None
    last_name = None
    username = models.CharField(max_length=30, null=False, blank=False, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200, validators=[validators.MinLengthValidator(8)])
    # profile_image = models.ImageField(null=True, blank=True, upload_to='profile_pictures/')
    profile_image = models.ForeignKey(ProfilePicture, null=True, blank=True, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username', 'password']

    objects = CustomerManager()

    def __str__(self):
        return f'username: {self.username} \n user email: {self.email}'
    



