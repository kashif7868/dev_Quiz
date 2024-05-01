from django.urls import path
from home import views

urlpatterns = [
    path("", views.home, name="home"),
    path("pythonQuiz/", views.python_quiz , name="python_quiz"),
    path("javaQuiz/", views.java_quiz, name="java_quiz"),
    path("cplusQuiz/", views.cplus_quiz, name="cplus_quiz"),
    path("javasQuiz/", views.javas_quiz, name="javas_quiz"),
    path("csharkQuiz/", views.cshark_quiz, name="cshark_quiz"),
    path("rubyQuiz/", views.ruby_quiz, name="ruby_quiz"),
    path("swiftQuiz/", views.swift_quiz, name="swift_quiz"),
    path("goQuiz/", views.go_quiz, name="go_quiz"),
    path("kotlinQuiz/", views.kotlin_quiz, name="kotlin_quiz"),
    path("fsharpQuiz/", views.go_quiz, name="fsharp_quiz"),
    path("blogProgramming/", views.blog_programming, name="blog_programming"),
    path("signup/", views.signup, name="signup"),
    path("login/", views.login_user, name="login"),
   path('logout/', views.logout_user, name='logout'),
    
]