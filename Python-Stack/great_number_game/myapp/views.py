from django.shortcuts import render, redirect
import random
# Create your views here.
def index(request):
    return render(request, 'index.html')

def result(request):
    if 'random_number' not in request.session:
        request.session['random_number'] = random.randint(1, 100)
    if request.method == 'POST':
        user_number = int(request.POST['number'])
        if user_number < request.session['random_number']:
            context = {
                'message': 'Too low!'
            }
        elif user_number > request.session['random_number']:
            context = {
                'message': 'Too high!'
            }
        else:
            context = {
                'message': 'You guessed it right!'
            }
            request.session.clear()
        return render(request, 'index2.html', context)
    return redirect('/')