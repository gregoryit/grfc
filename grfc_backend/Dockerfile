FROM python:3.10-slim

# устанавливаем рабочую директорию
WORKDIR /app

# копируем необходимые данные
COPY . .

# переменные окружения для python (не создавать файлы кэша .pyc и не помещать в буфер потоки stdout и stderr)
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# устанавливаем зависимости
RUN pip install --upgrade pip\
 && pip install --no-cache-dir -r requirements.txt\
 && chmod +x entrypoint.sh

# активизация миграции и gunicorn
ENTRYPOINT ["sh", "entrypoint.sh"]