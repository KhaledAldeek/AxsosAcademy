from django.db import models

# Create your models here.

class Show(models.Model):
    title = models.CharField(max_length=30)
    network = models.CharField(max_length=30)
    release_date = models.DateField()
    description = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def get_show(x):
    return Show.objects.get(id=x)

def shows_count():
    return Show.objects.count()

def get_all_shows():
    return Show.objects.all()

def delete_show(show):
    show.delete()

def add_show(title, network, date, description):
    Show.objects.create(title = title, network = network, release_date = date, description = description)

def update_show(show, title=None, network=None, date=None, description=None):
    #سنة وانا ادور كيف ب هاي الطريقة
    show.title = title or show.title
    show.network = network or show.network
    show.release_date = date or show.release_date
    show.description = description or show.description
    show.save()
