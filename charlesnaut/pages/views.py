import os, sys; sys.path.insert(1, os.path.join("..", ".."))

from django.http import HttpResponse
from django.shortcuts import render_to_response

def home(request):
    return render_to_response("pages/home.html")  
