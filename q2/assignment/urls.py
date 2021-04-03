from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.views.static import serve
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    path('auth/', include('auth.urls')),
    path('twitter/', include('twitter.urls')),
    url(r'^', TemplateView.as_view(template_name='react.html')),
]