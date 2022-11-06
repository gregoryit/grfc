from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import GrfcUserCreationForm, GrfcUserChangeForm
from .models import GrfcUser, Menu, Position, Role, Subdivision

class GrfcUserAdmin(UserAdmin):
    add_form = GrfcUserCreationForm
    form = GrfcUserChangeForm
    model = GrfcUser
    list_display = ['username', 'fio', 'fio_r', 'fio_d', 'fio_t']

admin.site.register(GrfcUser, GrfcUserAdmin)


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent')



@admin.register(Position)
class PositionAdmin(admin.ModelAdmin):
    pass

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    pass

@admin.register(Subdivision)
class SubdivisionAdmin(admin.ModelAdmin):
    pass