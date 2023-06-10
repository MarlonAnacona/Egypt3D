# Generated by Django 4.2.1 on 2023-06-10 03:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_userprofile_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Avatar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='profile_pictures/')),
            ],
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='profile_image',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.avatar'),
        ),
    ]
