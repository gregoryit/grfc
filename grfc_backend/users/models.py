from django.db import models
from django.contrib.auth.models import AbstractUser


class MyActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)

class MyInactiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=True)

class BaseModel(models.Model):
    created_who = models.IntegerField(default = 1)
    crated_at = models.DateField(auto_now_add=True)
    updated_who = models.IntegerField(default = 1)
    updated_at = models.DateField(auto_now=True)
    deleted_who = models.IntegerField(default = 1)
    deleted_at = models.DateField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    objects = MyActiveManager()
    objects_deleted = MyInactiveManager()
    objects_all = models.Manager()

    class Meta:
        abstract = True


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
    first_name = None
    last_name = None
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
