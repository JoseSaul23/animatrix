from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register('movies', MovieViewSet, 'movies')
router.register('genres', GenreViewSet, 'genres')

urlpatterns = router.urls