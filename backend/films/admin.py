from django.contrib import admin
from films import models

admin.site.register(models.Genre)
admin.site.register(models.Movie)
