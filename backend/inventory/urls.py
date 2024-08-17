# inventory/urls.py
from django.urls import path
from .views import CameraListCreate, CameraRetrieveUpdateDestroy

urlpatterns = [
    path('cameras/', CameraListCreate.as_view(), name='camera-list-create'),
    path('cameras/<int:pk>/', CameraRetrieveUpdateDestroy.as_view(), name='camera-detail'),
]
