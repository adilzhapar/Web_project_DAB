from django.http.response import JsonResponse


# Create your views here.
from api.models import *

def users_list(request):
    users = User.objects.all()
    users_json = [user.to_json() for user in users]
    return JsonResponse(users_json, safe=False)


def user_item(request, user_id):
    try:
        user = User.objects.get(id=user_id) 
    except User.DoesNotExist as e:
        return JsonResponse({'message: {str(e)}'})
    
    return JsonResponse(user.to_json())
