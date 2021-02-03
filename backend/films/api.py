from .models import *
from .serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, filters, pagination


class Pagination(pagination.PageNumberPagination):
    page_size = 20


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    pagination_class = Pagination
    http_method_names = ['get', 'head','options']

    @action(detail=True, methods=['GET'], name='movies')
    def movies(self, request, *args, **kwargs):
        queryset = Movie.objects.filter(genres=self.get_object())
        page = self.paginate_queryset(queryset)
        serializer = MovieMiniSerializer(page, many=True)
        return self.get_paginated_response(serializer.data)


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = Pagination
    http_method_names = ['get', 'head', 'options']
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'title',
        'genres',
        'synopsis',
    ]

    @action(detail=False, methods=['GET'], name='last_movies')
    def last_movies(self, request, *args, **kwargs):
        queryset = Movie.objects.all()[:5]
        serializer = MovieMiniSerializer(queryset, many=True)
        return Response(data=serializer.data)