from django.shortcuts import render

def home(request):
    return render(request, 'home.html')
def front(request):
    return render(request, 'front.html')
def carte(request):
    return render(request, 'carte.html')
