from followPractApp import views 
from django.urls import path
urlpatterns = [ 
    path('estudiantes/', views.estudiantes_list, name='listado_estudiantes'),

    path('estudiantes/<int:estudiante_id>/', views.estudiante_detail, name='detalle_estudiante'),
]