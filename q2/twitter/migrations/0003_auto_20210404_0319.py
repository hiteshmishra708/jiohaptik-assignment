# Generated by Django 2.0.4 on 2021-04-04 03:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0002_auto_20210404_0252'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tweet',
            old_name='message',
            new_name='tweet',
        ),
    ]