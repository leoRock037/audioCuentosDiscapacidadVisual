from django.db import models

# Create your models here.

class Story(models.Model):
	title 				= models.CharField(max_length = 100)
	description 		= models.TextField()
	status 				= models.BooleanField(default = True)

	def __unicode__(self):
		return self.title
