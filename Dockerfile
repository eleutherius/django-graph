# Stage 1: Build React app
FROM node:16 AS frontend-builder
WORKDIR /app
COPY ./graph-react/package.json ./graph-react/package-lock.json ./
RUN npm install
COPY ./graph-react ./
RUN npm run build

# Stage 2: Build Django backend
FROM python:3.12 AS backend-builder
WORKDIR /app
COPY ./django-graph/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./django-graph ./

# Run collectstatic
RUN python manage.py collectstatic --noinput --clear

# Stage 3: Final image
FROM python:3.12
WORKDIR /app

# Copy installed Python packages
COPY --from=backend-builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=backend-builder /usr/local/bin /usr/local/bin

# Copy Django backend
COPY --from=backend-builder /app /app

# Copy React build
COPY --from=frontend-builder /app/build /app/frontend/build

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=movies.settings
ENV PYTHONPATH=/app

# Expose port for Django
EXPOSE 8000

# Run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
