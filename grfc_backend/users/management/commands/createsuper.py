from django.conf import settings
from django.core.management.base import BaseCommand
from users.models import GrfcUser

class Command(BaseCommand):

    def handle(self, *args, **options):
        if GrfcUser.objects.count() == 0:
            for user in settings.ADMINS:
                username = user[0]
                email = user[1]
                password = 'admin'
                print('Creating account for %s (%s)' % (username, email))
                admin = GrfcUser.objects.create_superuser(email=email, username=username, password=password)
                admin.is_active = True
                admin.is_admin = True
                admin.save()
        else:
            print('Admin users can only be initialized if no users exist')