import os

from wsgi import application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")

# Define the WSGI application to use with gunicorn
app = application
