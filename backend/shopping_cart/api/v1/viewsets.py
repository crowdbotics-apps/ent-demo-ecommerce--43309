from rest_framework import authentication
from shopping_cart.models import Shopping_cart_items,Shopping_cart,Entry,Entry,Shopping_cart,Shopping_cart_items,Entry,Shopping_cart,Shopping_cart_items
from .serializers import Shopping_cart_itemsSerializer,Shopping_cartSerializer,EntrySerializer,EntrySerializer,Shopping_cartSerializer,Shopping_cart_itemsSerializer,EntrySerializer,Shopping_cartSerializer,Shopping_cart_itemsSerializer
from rest_framework import viewsets

class Shopping_cart_itemsViewSet(viewsets.ModelViewSet):
    serializer_class = Shopping_cart_itemsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Shopping_cart_items.objects.all()

class Shopping_cartViewSet(viewsets.ModelViewSet):
    serializer_class = Shopping_cartSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Shopping_cart.objects.all()

class EntryViewSet(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Entry.objects.all()