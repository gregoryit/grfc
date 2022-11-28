from django.conf import settings
from django.core.management.base import BaseCommand
from users.models import GrfcUser

class Command(BaseCommand):

    def handle(self, *args, **options):
        if GrfcUser.objects.filter(username='db_user').count() == 0:
                username = 'db_user'
                email = 'db_user@db_user.com'
                password = 'klwuegf9376rtiNiuf7nt9874ioanf'
                print('Creating account for %s (%s)' % (username, email))
                db_user = GrfcUser.objects.create_user(email=email, username=username, password=password)
                db_user.is_active = True
                db_user.is_admin = True
                db_user.save()
        else:
            print('Db_user already exist')