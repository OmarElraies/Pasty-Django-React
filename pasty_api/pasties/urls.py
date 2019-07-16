from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListPaste.as_view()),
    path('<str:slug>/', views.DetailPaste.as_view()),
    path('<str:slug>/update', views.UpdatePaste.as_view()),
    path('<str:slug>/delete', views.DeletePaste.as_view()),
    path('newpasty', views.CreatePaste.as_view()),

]