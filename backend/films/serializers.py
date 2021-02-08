from rest_framework import serializers
from .models import *


class GenreDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'


class GenreInListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ['id', 'name']        


class MovieDetailSerializer(serializers.ModelSerializer):
    genres = GenreInListSerializer(many=True)

    class Meta:
        model = Movie
        fields = '__all__'


class MovieInListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ['id', 'title', 'thumbnail', 'gif', 'preview_url']
