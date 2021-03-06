from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from api.models import Project
from api.serializers import ProjectSerializer


@api_view(['GET', ])
@permission_classes((AllowAny,))
def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.get_data_for_home_page()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
