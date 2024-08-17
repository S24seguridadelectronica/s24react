from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('inventory.urls')),  # Asegúrate de que 'myapp' exista en tu proyecto
    path('', views.home, name='home'),

]
