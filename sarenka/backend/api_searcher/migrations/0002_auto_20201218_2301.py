# Generated by Django 3.1.1 on 2020-12-18 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_searcher', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cwemodel',
            old_name='description',
            new_name='title',
        ),
        migrations.AlterField(
            model_name='cwedate',
            name='timestamp',
            field=models.CharField(default='', max_length=100),
        ),
    ]