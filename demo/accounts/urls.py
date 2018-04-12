from django.conf.urls import url
from . import views

from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'user', views.UserViewSet, base_name='users')

urlpatterns = [
    url(r'^login/',views.Login.as_view()),
    url (r'mark-inactive/(?P<pk>\d+)/$', views.MarkUserInactive.as_view()),
    url(r'update/(?P<action_type>activate|deactivate|delete)/', views.UpdateUser.as_view()),
]

urlpatterns += router.urls