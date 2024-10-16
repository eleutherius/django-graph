#!/bin/bash

export DJANGO_SETTINGS_MODULE=movies.settings  # Set the correct settings module
source venv/bin/activate

# Перехід до директорії бекенду
cd django-graph

# Запуск Django сервера
python manage.py runserver 0.0.0.0:8000