FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt --no-cache-dir

COPY . .

CMD sleep 15 && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8001