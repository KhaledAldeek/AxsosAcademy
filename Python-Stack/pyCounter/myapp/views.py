from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if "counter" not in request.session:
        request.session["counter"] = 0
    request.session["counter"] += 1
    
    return render(request, 'index.html')

def destroy_session(request):
    request.session.clear()
    return redirect('/')


