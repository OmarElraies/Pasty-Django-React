# todos/views.py
from rest_framework import generics

from .models import Paste
from .serializers import PasteSerializer


import datetime
from django.utils import timezone

class ListPaste(generics.ListAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer


class DetailPaste(generics.RetrieveAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer
    lookup_field = 'slug'

class CreatePaste(generics.CreateAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer

class UpdatePaste(generics.UpdateAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer

class DeletePaste(generics.DestroyAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer

