from api.views import *

from django.urls import path

urlpatterns = [
    path('users/', users_list),
    path(r'users/<int:user_id>/', user_item)
]