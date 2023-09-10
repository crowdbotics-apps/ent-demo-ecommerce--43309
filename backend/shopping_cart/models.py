from django.conf import settings
from django.db import models
class Shopping_cart_items(models.Model):
    'Generated Model'
    item_sku = models.IntegerField()
    item_name = models.CharField(max_length=255,)
    item_id = models.IntegerField()
    item_price = models.DecimalField(max_digits=6,decimal_places=2,null=True,blank=True,)
class Shopping_cart(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="shopping_cart_user",)
class Entry(models.Model):
    'Generated Model'
    item = models.ForeignKey("shopping_cart.Shopping_cart_items",on_delete=models.CASCADE,related_name="entry_item",)
    shopping_cart = models.ForeignKey("shopping_cart.Shopping_cart",on_delete=models.CASCADE,null=True,blank=True,related_name="entry_shopping_cart",)
    quantity = models.IntegerField(null=True,blank=True,)

# Create your models here.
