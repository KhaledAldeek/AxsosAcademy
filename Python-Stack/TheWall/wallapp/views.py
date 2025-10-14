from django.shortcuts import render, redirect
from . import models
from myapp.models import User 
from myapp import models as userModels
from django.contrib import messages

# Create your views here.
def index(request):
    message = models.Message.objects.all()
    if request.method == "POST":
        form_type = request.POST.get('type')
        if form_type == 'log_out':
            return redirect('/')
        else:
            if form_type == 'message':
                errors = models.Message.objects.basic_validator(request.POST)
                if len(errors) > 0:
                    for key, value in errors.items():
                        messages.error(request, value, f'message_{key}')
                    return redirect('/wall')
                else:
                    message = request.POST.get('message')
                    user_id = request.session['user_id']
                    models.cretae_message(message, user_id)
                    return redirect('/wall')
            else:
                errors = models.Comment.objects.basic_validator(request.POST)
                if len(errors) > 0:
                    for key, value in errors.items():
                        messages.error(request, value, f'comment_{key}')
                    return redirect('/wall')
                else:
                    comment = request.POST['comment']
                    user_id = request.session['user_id']
                    # print('my name is batata')
                    message_id = request.POST['message_id']
                    models.create_comment(comment, user_id, message_id)
                    return redirect('/wall')
    return render(request, 'wall.html', context={'messages' : message})

# if request.method == "POST":
#         form_type = request.POST.get('type')
#         if form_type == 'log_out':
#             return redirect('/')
#         else:
#             errors = models.User.objects.basic_validator(request.POST, form_type)
#             if form_type == 'register':
#                 if len(errors) > 0:
#                     for key, value in errors.items():
#                         messages.error(request, value, 'reg_{key}')
#                     return redirect('/')
#                 else:
#                     first_name = request.POST.get('first_name')
#                     last_name = request.POST.get('last_name')
#                     email = request.POST.get('email')
#                     password = request.POST.get('password')
#                     hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
#                     user = models.create_user(first_name, last_name, email, hashed_pw)
#                     request.session['user_id'] = user.id #
#                     # request.session['full_name'] = user.first_name+" "+user.last_name 
#                     request.session['first_name'] = user.first_name
#                     return redirect('/wall')
#             else:
#                 if len(errors) > 0:
#                     for key, value in errors.items():
#                         messages.error(request, value, 'log_{key}')
#                     return redirect('/')
#                 else:
#                     email = request.POST.get('email')
#                     password = request.POST.get('password')
#                     user = models.get_user_by_email(email)
#                     if not user:
#                         messages.error(request, "Email Not exsists", 'log_')
#                     else:
#                         if not bcrypt.checkpw(password.encode(), user.password.encode()):
#                             messages.error(request, "Password is incorrect", 'log_')
#                     request.session['user_id'] = user.id #
#                     # request.session['full_name'] = user.first_name+" "+user.last_name 
#                     request.session['first_name'] = user.first_name
#                     return redirect('/wall')
#     return render(request, 'index.html')



# errors = models.Message.objects.basicvalidator(request.POST)
#         if len(errors) > 0:
#             for key, value in errors.items():
#                 messages.error(request, value, 'message_{key}')
#             return redirect('/wall')
#         else:
#             message = request.POST.get('')
#             models.cretae_message()