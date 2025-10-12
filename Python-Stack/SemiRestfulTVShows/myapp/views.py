from django.shortcuts import render, HttpResponse, redirect
from . import models

# Create your views here.
def index(request):
    return render(request, 'index.html')

def shows(request):
    shows_count = models.shows_count()
    shows = models.get_all_shows()
    return render(request, 'shows.html', context = {"shows": shows, 'shows_count' : shows_count})

def delete_show(request, x):
    show = models.get_show(x)
    models.delete_show(show)
    return redirect('/shows')

def new(request):
    if request.method == "POST":
        title = request.POST.get('title')
        network = request.POST.get('network')
        date = request.POST.get('release-date')
        description = request.POST.get('description')
        if not (title and network and date and description):
            return render(request, 'new.html', context = {'message' : "All Fields must be Filled"})
        else:
            models.add_show(title, network, date, description)
            return redirect('/shows')
    return render(request, 'new.html')

def edit_show(request, x):
    if request.method == "POST":
        title = request.POST.get('title')
        network = request.POST.get('network')
        date = request.POST.get('release-date')
        description = request.POST.get('description')
        if not (title or network or date or description):
            print("Khaled")
            return render(request, 'edit.html', context = {'message' : "All Fields must be Filled"})
        else:
            show = models.get_show(x)
            models.update_show(show, title, network, date, description)
            return redirect('/shows')
    return render(request, 'edit.html', context={'show' : models.get_show(x)})

def a_scpecific_Show(request, x):
    return render(request, 'show.html', context={'show' : models.get_show(x)})