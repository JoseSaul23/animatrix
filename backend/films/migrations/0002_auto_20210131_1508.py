# Generated by Django 3.1.5 on 2021-01-31 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genre',
            name='description',
            field=models.TextField(max_length=400),
        ),
    ]
