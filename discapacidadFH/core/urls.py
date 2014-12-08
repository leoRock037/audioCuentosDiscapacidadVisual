from django.conf.urls import patterns, url, include

urlpatterns = patterns('core.views',
    # Examples:
    # url(r'^$', 'discapacidadFH.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

	url(r'^$', 'index',name="index"),

)
