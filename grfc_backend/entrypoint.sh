#!/bin/bash

python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --no-input -c -v 0
gunicorn --bind 0:8001 grfc_backend.wsgi 
