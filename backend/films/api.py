from .models import *
from .serializers import *
from rest_framework import viewsets, filters, pagination


class Pagination(pagination.PageNumberPagination):
    page_size = 30


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    pagination_class = Pagination
    http_method_names = ['get', 'head','options']


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    pagination_class = Pagination
    http_method_names = ['get', 'head', 'options']
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'title',
        'genres',
    ]