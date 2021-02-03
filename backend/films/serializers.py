from rest_framework import serializers
from .models import *


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'


class GenreMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ['id', 'name']        


class MovieSerializer(serializers.ModelSerializer):
    genres = GenreMiniSerializer(many=True)

    class Meta:
        model = Movie
        fields = '__all__'


class MovieMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ['id', 'title', 'thumbnail', 'gif', 'iframe']
