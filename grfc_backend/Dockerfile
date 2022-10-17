FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt --no-cache-dir


COPY . .

RUN python3 manage.py migrate


CMD ["python3", "manage.py", "runserver", "0.0.0.0:8001" ]