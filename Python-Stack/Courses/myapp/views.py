from django.shortcuts import render, redirect
from . import models
from django.contrib import messages
# Create your views here.
def index(request):
    if request.method == "POST":
        errors = models.Course.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        name = request.POST.get('name')
        description = request.POST.get('description')
        models.add_course(name, description)
        return redirect('/')
    return render(request, 'index.html', context={'courses' : models.get_all_courses()})

def destroy_course(request, x):
    course = models.get_course(x)
    return render(request, 'destroy.html', context={ 'course' : course})

def delete(request):
    if request.method == 'POST':
        action = request.POST.get('action')
        course_id = request.POST.get('hidden_input')
        course = models.get_course(course_id)
        if action == "yes":
            models.delete_course(course)
            return redirect('/')

        else:
            return render(request, 'index.html', context={ 'courses' : models.get_all_courses(),
                                                            'message': "Deleting canceled"})

    return redirect('/') 
    