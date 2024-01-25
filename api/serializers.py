from rest_framework.serializers import ModelSerializer
from paws.models import Pets
from .models import CustomUser

class PetSerializer(ModelSerializer):
  class Meta:
    model = Pets
    fields = '__all__'
    
    

class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username', 'name', 'password', 'confirm_password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data.pop('confirm_password', None)
        return super().create(validated_data)




