from django.db import models
from django.contrib.auth.models import AbstractUser


class MyActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted_who__isnull=True)

class MyInactiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted_who__isnull=False)

class BaseModel(models.Model):
    created_who = models.IntegerField(default=1)
    crated_at = models.DateField(auto_now_add=True)
    updated_who = models.IntegerField(default=1)
    updated_at = models.DateField(auto_now=True)
    deleted_who = models.IntegerField(blank=True, null=True)
    deleted_at = models.DateField(blank=True, null=True)

    objects = MyActiveManager()
    objects_deleted = MyInactiveManager()
    objects_all = models.Manager()

    class Meta:
        abstract = True
    
    def get_db_user(self):
        user = GrfcUser.objects.filter(username='db_user')
        return user.pk



class Position(BaseModel):
    title = models.CharField(max_length=255)
    title_r = models.CharField(max_length=200, verbose_name='Наименование род. падеж')
    title_d = models.CharField(max_length=200, verbose_name='Наименование дат. падеж')
    title_t = models.CharField(max_length=200, verbose_name='Наименование твор. падеж')

    class Meta:
        db_table = 'position'

class Menu(BaseModel):
    name = models.CharField(max_length=200, verbose_name='Пункт меню')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'menu'

class Role(BaseModel):
    title = models.CharField(max_length=255)
    menu = models.ManyToManyField(Menu)


    class Meta:
        db_table = 'role'


class GrfcUser(AbstractUser, BaseModel):
    patronymic = models.CharField(max_length=200, verbose_name='Отчество', blank=True, null=True)
    username = models.CharField(max_length=200, verbose_name='Имя пользователя', unique=True)
    fio = models.CharField(max_length=200, verbose_name='ФИО')
    fio_r = models.CharField(max_length=200, verbose_name='ФИО род. падеж')
    fio_d = models.CharField(max_length=200, verbose_name='ФИО дат. падеж')
    fio_t = models.CharField(max_length=200, verbose_name='ФИО твор. падеж')
    position = models.ForeignKey(Position, on_delete=models.CASCADE, blank=True, null=True)
    role = models.ManyToManyField(Role)




class Subdivision(BaseModel):
    title = models.CharField(max_length=255)
    full_title = models.CharField(max_length=400)
    full_title_r = models.CharField(max_length=400)
    full_title_d = models.CharField(max_length=400)
    full_title_t = models.CharField(max_length=400)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'subdivision'
