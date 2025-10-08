from django.shortcuts import render, redirect
from . import models
# Create your views here.
def index(request):
    return render(request, "index.html", {"dojos": models.get_all_dojos(), "ninjas": models.get_all_ninjas()})

def submit(request):
    if request.method == "POST":
        hidden = request.POST.get('hidden_form')
        if hidden == 'dojo_form':
            name = request.POST.get('name')
            city = request.POST.get('city')
            state = request.POST.get('state')
            dojos = models.get_all_dojos()
            ninjas = models.get_all_ninjas()
            if not (name and city and state):
                return render(request, "index.html", {"message": "All fields are required!" , "dojos": dojos, "ninjas": ninjas})
            else:
                models.add_dojo(name, city, state)
                return redirect('/')
        else:
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            dojo_id = request.POST.get('dojos')
            dojos = models.get_all_dojos()
            ninjas = models.get_all_ninjas()
            if not (first_name and last_name and dojo_id):
                return render(request, "index.html", {"message": "Please Make Sure That All fields are filled" , "dojos": dojos, "ninjas": ninjas})
            else:
                dojo = models.get_dojo(int(dojo_id))
                models.add_ninja(first_name, last_name, dojo)
                return redirect('/')
            