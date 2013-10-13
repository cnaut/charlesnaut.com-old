import os, sys; sys.path.insert(1, os.path.join("..", ".."))

from django.http import HttpResponse
from django.shortcuts import render_to_response

def home(request):
    return render_to_response("pages/home.html")  

def v1(request):
    return render_to_response("pages/home4.html")  

def v2(request):
    return render_to_response("pages/home2.html")  


def v3(request):
    return render_to_response("pages/home3.html")  

def projects(request):
    return render_to_response("pages/projects.html")
