from django.shortcuts import render, render_to_response
from django.template import RequestContext

from models import Story
# Create your views here.

def index(request):
	story = Story.objects.filter(status = True)
	ctx = {"stories":story}
	return render_to_response('index.html',ctx,context_instance = RequestContext(request))
