from django.db import models
from django.utils.crypto import get_random_string


class Paste(models.Model):
    EXPIRATION_CHOICES = (
        ('N', 'Never',),
        ('M', '10 Minutes',),
        ('H', '1 Hour',),
        ('D', '1 Day',),
    )

    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('auth.User', related_name='plants', on_delete=models.CASCADE, blank=True, null=True)
    content = models.TextField()
    title = models.CharField(max_length=255)
    syntax = models.CharField(max_length=255)
    #slug = models.SlugField(max_length=5,blank=True,) # blank if it needs to be migrated to a model that didn't already have this 
    slug = models.CharField(max_length=10,default=get_random_string(10))

    print(slug)
    # def save(self, *args, **kwargs):
    #     """ Add Slug creating/checking to save method. """
    #     slug_save(self) # call slug_save, listed below
    #     Super(Paste, self).save(*args, **kwargs)
    
    class Meta:
        ordering = ('created',)

    def __str__(self):
        """A string representation of the model."""
        return self.title


# def slug_save(obj):
#     if not obj.slug: # if there isn't a slug
#         obj.slug = get_random_string(5) # create one
#         slug_is_wrong = True  
#         while slug_is_wrong: # keep checking until we have a valid slug
#             slug_is_wrong = False
#             other_objs_with_slug = type(obj).objects.filter(slug=obj.slug)
#             if len(other_objs_with_slug) > 0:
#             # if any other objects have current slug
#                 slug_is_wrong = True
#             naughty_words = ['fuck']
#             if obj.slug in naughty_words:
#                 slug_is_wrong = True
#             if slug_is_wrong:
#             # create another slug and check it again
#                 obj.slug = get_random_string(5)