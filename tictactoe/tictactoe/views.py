from django.shortcuts import render
from django.http import HttpResponse
def layout(request):
    return HttpResponse("hellow world")
    # return render(request,'layout.html',{"cells":range(9)})