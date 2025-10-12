from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('courses/destroy/<int:x>', views.destroy_course),
    path('destroy', views.delete)
]