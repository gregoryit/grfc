from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import GrfcUserCreationForm, GrfcUserChangeForm
from .models import GrfcUser, Menu, Position, Role, Subdivision

class GrfcUserAdmin(UserAdmin):
    add_form = GrfcUserCreationForm
    form = GrfcUserChangeForm
    model = GrfcUser
    fieldsets = UserAdmin.fieldsets + ((None, {'fields': ['patronymic', 'fio', 'fio_r', 'fio_d', 'fio_t']}), )
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {'fields': ['first_name', 'last_name', 'patronymic']}), )
    list_display = ['username', 'email', 'first_name', 'last_name', 'patronymic', 'fio', 'fio_r', 'fio_d', 'fio_t']

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