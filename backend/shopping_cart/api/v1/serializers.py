from rest_framework import serializers
from shopping_cart.models import Shopping_cart_items,Shopping_cart,Entry,Entry,Shopping_cart,Shopping_cart_items

class Shopping_cart_itemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shopping_cart_items
        fields = "__all__"

class Shopping_cartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shopping_cart
        fields = "__all__"

class EntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Entry
        fields = "__all__"