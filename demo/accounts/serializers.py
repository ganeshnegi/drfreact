
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id', 'first_name', 'last_name', 'username', 'password', 
            'is_active', 'is_superuser', 'is_staff', 'full_name'
        )
    
    def get_full_name(self, obj):
        return obj.get_full_name()


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def __init__(self, *args, **kwargs):
        super(LoginSerializer, self).__init__(*args, **kwargs)
        self.user = None

    def validate(self, attrs):
        try:
            user = User.objects.get(username=attrs['username'])
        except User.DoesNotExist:
            raise serializers.ValidationError('User not found with this username.')

        if user and not user.is_active:
            raise exceptions.ValidationError('Account is marked as inactive')

        self.user = authenticate(username=attrs['username'], password=attrs['password'])
        if not self.user:
            raise serializers.ValidationError("Invalid credentials.")
        return attrs


class UpdateUserSerializer(serializers.ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())

    class Meta:
        model = User
        fields = ('id',)