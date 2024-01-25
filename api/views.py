from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from paws.models import Pets
from .serializers import PetSerializer
from rest_framework import status

# from .models import CustomUser
# from .models import CustomUserManager
from .serializers import CustomUserSerializer


# Create your views here.


@api_view(['GET'])
def getRoutes(request):
  
  routes = [
    
      {'endpoint': 'api/token'},
      {'endpoint': 'api/token/refresh'},
      {'endpoint': 'api/pets'},
      {'endpoint': 'api/signup'},
      # {'endpoint': ''},
      # {'endpoint': ''},
    
  ]
  
  return Response(routes)


@api_view(['GET'])
def getPets(request):
  pets = Pets.objects.all()
  serializer = PetSerializer(pets, many = True)
  return Response(serializer.data)
  
@api_view(['GET'])
def getSinglePets(request,pk):
  pets = Pets.objects.get(id = pk)
  serializer = PetSerializer(pets, many = False)
  return Response(serializer.data)  



@api_view(['POST'])
def customUserCreate(request):
    if request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            password = serializer.validated_data.get('password')
            confirm_password = request.data.get('confirm_password')

            if password != confirm_password:
                return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


  
