from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, logout, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import logout


def home(request):
    #  print(request.user)
    if request.user.is_anonymous:
        return redirect("/login")
    return render(request, "index.html")


def python_quiz(request):
    return render(request, "pages/python_quiz.html")


def java_quiz(request):
    return render(request, "pages/java_quiz.html")


def cplus_quiz(request):
    return render(request, "pages/cplus_quiz.html")


def javas_quiz(request):
    return render(request, "pages/javas_quiz.html")


def cshark_quiz(request):
    return render(request, "pages/cshark_quiz.html")


def ruby_quiz(request):
    return render(request, "pages/ruby_quiz.html")


def swift_quiz(request):
    return render(request, "pages/swift_quiz.html")


def go_quiz(request):
    return render(request, "pages/go_quiz.html")


def kotlin_quiz(request):
    return render(request, "pages/kotlin_quiz.html")


def fsharp_quiz(request):
    return render(request, "pages/fsharp_quiz.html")


def blog_programming(request):
    return render(request, "blog_pf.html")


def login_user(request):
    if request.method != "POST":
        return render(request, "login.html")
    username = request.POST.get("username")
    password = request.POST.get("password")
    print(username, password)
    user = authenticate(username=username, password=password)
    if user is None:
        return render(request, "login.html")
    login(request, user)
    return redirect("/")


def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirect to login page after successful signup
            return redirect("login")
        else:
            # If form data is invalid, show an error message
            messages.error(
                request,
                "Failed to create an account. Please check the form and try again.",
            )
    else:
        form = UserCreationForm()
    return render(request, "signup.html", {"form": form})


def logout_user(request):
    logout(request)
    return redirect("/login")
