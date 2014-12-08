from django.contrib import admin
from core.models import Story

class StoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    search_fields = ('title', 'description')


admin.site.register(Story,StoryAdmin)
