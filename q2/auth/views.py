from .serializers import RegisterSerializer
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from twitter.models import Response
from django.views.decorators.csrf import csrf_exempt
import json
from twitter.models import People

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@csrf_exempt
def auth_view(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        user = User.objects.get(email=json_data['email'])
        if user is not None and user.check_password(json_data['password']):
            access_token, created = Token.objects.get_or_create(user=user)
            return Response({
                'access_token': access_token.key,
                'user': People.objects.get(user=user).get_obj()
            }).get_obj()
        else:
            return Response({ 'success': False, 'message': 'Signing failed' }, 400).get_obj()
    return Response({}).get_obj()