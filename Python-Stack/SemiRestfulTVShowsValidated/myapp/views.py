from django.shortcuts import render, HttpResponse, redirect
from . import models
from django.contrib import messages
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
        errors = models.Show.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/shows/new')
        else:
            title = request.POST.get('title')
            network = request.POST.get('network')
            date = request.POST.get('release-date')
            description = request.POST.get('description')
            models.add_show(title, network, date, description)
            return redirect('/shows')
    return render(request, 'new.html')

def edit_show(request, x):
    show = models.get_show(x)
    if request.method == "POST":
        errors = models.Show.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect(f'/shows/{x}/edit')
        else:
            title = request.POST.get('title')
            network = request.POST.get('network')
            date = request.POST.get('release-date')
            description = request.POST.get('description')
            models.update_show(show, title, network, date, description)
            return redirect('/shows')
    return render(request, 'edit.html', context={'show': show})


def a_scpecific_Show(request, x):
    return render(request, 'show.html', context={'show' : models.get_show(x)})