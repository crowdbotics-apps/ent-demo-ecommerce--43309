
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Shopping_cart_itemsViewSet,Shopping_cartViewSet,EntryViewSet,EntryViewSet,Shopping_cartViewSet,Shopping_cart_itemsViewSet,EntryViewSet,Shopping_cartViewSet,Shopping_cart_itemsViewSet,EntryViewSet,Shopping_cartViewSet,Shopping_cart_itemsViewSet
router = DefaultRouter()
router.register('shopping_cart_items', Shopping_cart_itemsViewSet )
router.register('shopping_cart', Shopping_cartViewSet )
router.register('entry', EntryViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
