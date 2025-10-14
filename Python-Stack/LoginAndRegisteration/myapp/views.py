from django.shortcuts import render, redirect
import bcrypt
from .import models
from django.contrib import messages

# Create your views here.
def index(request):
    if request.method == "POST":
        form_type = request.POST.get('type')
        if form_type == 'log_out':
            return redirect('/')
        else:
            errors = models.User.objects.basic_validator(request.POST, form_type)
            if form_type == 'register':
                if len(errors) > 0:
                    for key, value in errors.items():
                        messages.error(request, value, 'reg_{key}')
                    return redirect('/')
                else:
                    first_name = request.POST.get('first_name')
                    last_name = request.POST.get('last_name')
                    email = request.POST.get('email')
                    password = request.POST.get('password')
                    hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
                    user = models.create_user(first_name, last_name, email, hashed_pw)
                    request.session['user_id'] = user.id #
                    request.session['full_name'] = user.first_name+" "+user.last_name 
                    return redirect('/success')
            else:
                if len(errors) > 0:
                    for key, value in errors.items():
                        messages.error(request, value, 'log_{key}')
                    return redirect('/')
                else:
                    email = request.POST.get('email')
                    password = request.POST.get('password')
                    user = models.get_user_by_email(email)
                    if not user:
                        messages.error(request, "Email Not exsists", 'log_')
                    else:
                        if not bcrypt.checkpw(password.encode(), user.password.encode()):
                            messages.error(request, "Password is incorrect", 'log_')
                    request.session['user_id'] = user.id #
                    request.session['full_name'] = user.first_name+" "+user.last_name 
                    return redirect('/success')
    return render(request, 'index.html')

def success(request):
    return render(request, 'success.html')

def flush_data(request):
    if request.method == "POST":
        request.session.flush()
    return redirect('/')
