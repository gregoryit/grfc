#!/bin/bash

python wait.py
python manage.py makemigrations
python manage.py migrate
python manage.py createsuper
python manage.py create_db_user
python manage.py collectstatic --no-input -c -v 0
python manage.py runscript upload
gunicorn --bind 0:8001 grfc_backend.wsgi 