from .models import *
from .serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, filters, pagination
import random


class Pagination(pagination.PageNumberPagination):
    page_size = 20

class GenrePagination(pagination.PageNumberPagination):
    page_size = 12

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreDetailSerializer
    pagination_class = GenrePagination
    http_method_names = ['get', 'head','options']

    @action(detail=True, methods=['GET'], name='movies')
    def movies(self, request, *args, **kwargs):
        queryset = Movie.objects.filter(genres=self.get_object())
        self.pagination_class = Pagination
        page = self.paginate_queryset(queryset)
        serializer = MovieInListSerializer(page, many=True)
        return self.get_paginated_response(serializer.data)


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieDetailSerializer
    pagination_class = Pagination
    http_method_names = ['get', 'head', 'options']
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'title',
        'synopsis',
        'genres__name',
        'genres__description',
    ]

    @action(detail=False, methods=['GET'], name='last_movies')
    def last_movies(self, request, *args, **kwargs):
        queryset = Movie.objects.all()[:20]
        serializer = MovieInListSerializer(queryset, many=True)
        return Response(data=serializer.data)
    
    @action(detail=False, methods=['GET'], name='random')
    def random(self, request, *args, **kwargs):
        queryset = Movie.objects.all()
        random_movie = random.sample(list(queryset), 1)[0].id
        return Response(data={'id': random_movie})