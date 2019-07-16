# todos/serializers.py
from rest_framework import serializers
from .models import Paste


class PasteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        fields = '__all__'
        model = Paste
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }