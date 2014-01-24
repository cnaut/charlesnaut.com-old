from django.conf.urls import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'pages.views.home', name='home'),
    url(r'^projects', 'pages.views.projects', name='projects'),
    url(r'^v1', 'pages.views.v1', name='v1'),
    url(r'^v2', 'pages.views.v2', name='v2'),
    url(r'^v3', 'pages.views.v3', name='v3'),
    url(r'^v5', 'pages.views.v5', name='v5'),
    url(r'^resume', 'django.views.static.serve', {'document_root': '/static/resume.pdf'}),
    
    #url(r'^mobydick/(?P<path>.*)$', 'django.views.static.serve', {'document_root': '/static/mobydick'}),
    # url(r'^charlesnaut/', include('charlesnaut.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
