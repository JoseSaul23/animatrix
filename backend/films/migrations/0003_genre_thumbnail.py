# Generated by Django 3.1.5 on 2021-02-03 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0002_auto_20210131_1508'),
    ]

    operations = [
        migrations.AddField(
            model_name='genre',
            name='thumbnail',
            field=models.URLField(default='http://i3.ytimg.com/vi/ldYJ916tqJY/maxresdefault.jpg', max_length=400),
            preserve_default=False,
        ),
    ]
