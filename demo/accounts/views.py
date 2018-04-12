from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer

from rest_framework import (
    views, viewsets, generics, serializers, exceptions, response, permissions, status, filters
)

from . import serializers as account_serializers


class Login(generics.CreateAPIView):
    """
    login using the username and password
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = AuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.user
            token, _ = Token.objects.get_or_create(user=user)
            return response.Response({'token':token.key,'id':user.id}, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    """
    To create, delete, edit single user
    """
    model = User
    permission_classes = (permissions.AllowAny,)
    pagination_class = None
    serializer_class = account_serializers.UserSerializer
    queryset = User.objects.all()

    filter_backends = (filters.SearchFilter,)
    search_fields = ('username', 'first_name', 'last_name')

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            password = serializer.validated_data.pop('password')
            user_obj = User.objects.create(**serializer.validated_data)
            user_obj.set_password(password)
            user_obj.save()
            return response.Response({'msg':'Registered successfully.'}, status=status.HTTP_201_CREATED)

    
class MarkUserInactive(views.APIView):
    """
    Maek single user as inactive
    """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        try:
            user_obj = User.objects.get(id=self.kwargs['pk'])
        except:
            raise exceptions.ParseError({'error':'User not exist'})
        if not user_obj.is_active:
            return response.Response({'msg':'Selected user already marked inactive'})
        user_obj.is_active = False
        user_obj.save()
        return response.Response({'msg':'Selected user marked inactive'})


class UpdateUser(views.APIView):
    """
    activate, deactivate and delete in bulk
    accepts list of id of users
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = account_serializers.UpdateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            action = self.kwargs.get('action_type')
            objs = serializer.validated_data['id']
            pks = [obj.id for obj in objs]
            user_list = User.objects.filter(pk__in=pks) #retrieve a queryset for bulk operation
            if action == 'activate':
                user_list.update(is_active=True)
            elif action == 'deactivate':
                user_list.update(is_active=False)
            elif action == 'delete':
                user_list.delete()
            return response.Response({'msg':'Selected operation completed'})
