from django.contrib import admin
from django.urls import path, re_path
from graphene_django.views import GraphQLView
from graphql_jwt.decorators import jwt_cookie
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),  # Serve React app
]
