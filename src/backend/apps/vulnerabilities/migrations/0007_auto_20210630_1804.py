# Generated by Django 3.1.7 on 2021-06-30 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vulnerabilities', '0006_auto_20210630_1803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vector',
            name='code',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
