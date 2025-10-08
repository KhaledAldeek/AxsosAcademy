from django.shortcuts import render, redirect
from .models import User

# Create your views here.
def index(request):
    context = {
        "users": User.objects.all()
    }
    return render(request, "index.html", context)


def add_user(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        age = request.POST['age']
        
        if first_name and last_name and age and email:
            User.objects.create(first_name=first_name, last_name=last_name, email=email, age=age)
            return redirect('/')  
        else:
            context = {
                'users': User.objects.all(),  # Get all users for the template
                'message': "Please make sure that all fields are filled"
            }
            return render(request, "index.html", context)
            
        
        