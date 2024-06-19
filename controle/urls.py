from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from entregas import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('entregas.urls'))
]
