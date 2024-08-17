# inventory/views.py
from rest_framework import generics
from .models import Camera
from .serializers import CameraSerializer

class CameraListCreate(generics.ListCreateAPIView):
    queryset = Camera.objects.all()
    serializer_class = CameraSerializer

class CameraRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Camera.objects.all()
    serializer_class = CameraSerializer
