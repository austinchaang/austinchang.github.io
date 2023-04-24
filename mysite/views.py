from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, "mysite/index.html")


def projects(request):
    return render(request, "mysite/projects.html")


def interests(request):
    return render(request, "mysite/interests.html")


def jsproject(request):
    return render(request, "mysite/jsproject.html")
