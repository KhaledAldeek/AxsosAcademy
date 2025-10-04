from django.http import HttpResponse
from django.shortcuts import render
from time import gmtime, strftime

# Create your views here.
def index(request):
    context = {
        "time": strftime(strftime("%b %d,%Y %I:%m %p"))
    }
    # ,context
    return render(request,'index.html',context)
    # return HttpResponse("Hello, world. You're at the polls page.")
