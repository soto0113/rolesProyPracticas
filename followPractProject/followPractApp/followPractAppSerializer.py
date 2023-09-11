from rest_framework import serializers 
from followPractApp.models import Estudiante

class FollowPractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = ('id',
                    'programa',
                    'codigo',
                    'emailInstitucional',
                    'emailPersonal',
                    'telefono',
                    'nombre',
                    'fechaRegistro')
