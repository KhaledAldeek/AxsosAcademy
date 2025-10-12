from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('shows', views.shows),
    path('shows/<int:x>/delete', views.delete_show),
    path('shows/new', views.new),
    path('shows/<int:x>', views.a_scpecific_Show),
    path('shows/<int:x>/edit', views.edit_show),
]