# Generated by Django 2.0.4 on 2021-04-04 02:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FollowRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateField(auto_now_add=True)),
                ('modified', models.DateField(auto_now=True)),
                ('followed_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='followed_by', to='twitter.People')),
                ('people', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='people', to='twitter.People')),
            ],
        ),
        migrations.RemoveField(
            model_name='tweet',
            name='title',
        ),
    ]
