
from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
     path('front', views.front, name='front'),
     path('carte', views.carte, name='carte'),
]
