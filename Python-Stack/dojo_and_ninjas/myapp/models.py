from django.db import models

# Create your models here.
class Dojo(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)

    def __str__(self):
        return self.name
    
class Ninja(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dojo = models.ForeignKey(Dojo, related_name='ninjas', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    

def get_all_ninjas():
    return Ninja.objects.all()

def get_all_dojos():
    return Dojo.objects.all().order_by('name')

def get_dojo(id):
    return Dojo.objects.get(id = id)

def get_ninja(id):
    return Ninja.objects.get(id = id)
    
def add_dojo(name, city, state):
    Dojo.objects.create(name = name, city = city, state = state)
    
def add_ninja(first_name, last_name, dojo):
    Ninja.objects.create(first_name = first_name, last_name = last_name, dojo = dojo)