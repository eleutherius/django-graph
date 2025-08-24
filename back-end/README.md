# Django GraphQL 
**Django GraphQL** - A simple Django app to manage GraphQL queries and mutations.


### Installation
```bash
cd ~/projects/django-graph
python3 -m venv venv
source venv/bin/activate
pip install .
```

### Run the app
```bash
cd back-end
python manage.py runserver 0.0.0.0:8000
```

### Verify it's running
```bash
curl -i http://127.0.0.1:8000/
# or open http://127.0.0.1:8000/ in your browser
```

### Apply migrations
```bash
python manage.py makemigrations
python manage.py migrate
```