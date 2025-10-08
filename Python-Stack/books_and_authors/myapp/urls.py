from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('view', views.view),
    path('view2', views.view2),
    path('authors', views.authors),
    path('authors_view', views.authors_view),
    path('author_view2', views.author_view2),
]