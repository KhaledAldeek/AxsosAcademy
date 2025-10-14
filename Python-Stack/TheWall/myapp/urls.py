from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('success', views.success),
    path('flush', views.flush_data)
]