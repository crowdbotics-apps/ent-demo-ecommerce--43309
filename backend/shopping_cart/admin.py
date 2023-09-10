from django.contrib import admin
from .models import Entry,Shopping_cart,Shopping_cart_items
admin.site.register(Shopping_cart_items)
admin.site.register(Shopping_cart)
admin.site.register(Entry)

# Register your models here.
