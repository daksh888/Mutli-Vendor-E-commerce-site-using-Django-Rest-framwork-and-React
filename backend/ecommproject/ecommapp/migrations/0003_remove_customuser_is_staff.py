# Generated by Django 5.0.4 on 2024-04-05 07:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecommapp', '0002_alter_customuser_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='is_staff',
        ),
    ]