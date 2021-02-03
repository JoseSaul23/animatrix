from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=400)
    thumbnail = models.URLField(max_length=400)
    # related_genres = 

    class Meta:
        db_table = 'Genre'
        verbose_name = 'Genre'
        verbose_name_plural = 'Genres'
        ordering = ('name', )
    
    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=200)
    thumbnail = models.URLField(max_length=400)
    gif = models.URLField(max_length=400)
    date_added = models.DateTimeField(auto_now_add=True)
    length = models.CharField(max_length=50)
    year = models.DateField()
    synopsis = models.TextField(max_length=400)
    iframe = models.TextField(max_length=5000)
    url = models.URLField(max_length=400)
    genres = models.ManyToManyField(
        'Genre',
        related_name='movies',
        db_table='movie-genre',
        verbose_name='Genres',
    )

    class Meta:
        db_table = 'Movie'
        verbose_name = 'Movie'
        verbose_name_plural = 'Movies'
        ordering = ('-date_added', )
    
    def __str__(self):
        return self.title
