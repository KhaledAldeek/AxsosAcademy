from django.shortcuts import render, HttpResponse, redirect
# Create your views here.
def index(request):
    return render(request, "index.html")

def submitted_form(request):
    context = {
        'name' : request.POST.get('name'),
        'location' : request.POST.get('location'),
        'language' : request.POST.get('language'),
        'comment' : request.POST.get('comment')
    }
    print(context['name'])
    print(context['location'])
    print(context['language'])
    print(context['comment'])
    return render(request, "submitted.html", context)

