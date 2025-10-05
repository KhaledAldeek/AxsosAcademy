from django.shortcuts import render, HttpResponse, redirect
import random
import datetime

# Create your views here.
def index(request):
    if 'your_gold' not in request.session:
        request.session['your_gold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    
    if request.method == "POST":
        hidden_value = request.POST.get('hidden')
        # 
        
        if hidden_value == "farm":
            # print(hidden_value)
            random_gold = random.randint(10,20)
            request.session['activities'].append(f"You entered a farm and earned {random_gold} golds {datetime.datetime.now()}")
            request.session['your_gold'] += random_gold
            return redirect('/')
        elif hidden_value == "cave":
            # print(hidden_value)
            random_gold = random.randint(10,20)
            request.session['activities'].append(f"You entered a cave and earned {random_gold} golds ({datetime.datetime.now()})")
            request.session['your_gold'] += random_gold
            return redirect('/')
        elif hidden_value == "house":
            print(hidden_value)
            random_gold = random.randint(10,20)
            request.session['activities'].append(f"You entered a house and earned {random_gold} golds ({datetime.datetime.now()})")
            request.session['your_gold'] += random_gold
            return redirect('/')
        elif hidden_value == "quest":
            # print(hidden_value)
            random_gold = random.randint(-50,50)
            request.session['your_gold'] += random_gold
            if random_gold > 0:
                request.session['activities'].append(f"You entered a quest and earned {random_gold} golds! ({datetime.datetime.now()})")
            else:
                request.session['activities'].append(f"Lost {abs(random_gold)} golds from the quest! ({datetime.datetime.now()})")
            return redirect('/')
        return render(request, 'index.html')
    return render(request, 'index.html')
    

def terminate(request):
    request.session.clear()
    return redirect('/')