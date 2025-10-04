from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    # path('form', views.submitted),
    path('submitted_form', views.submitted_form),
]