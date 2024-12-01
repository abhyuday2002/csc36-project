from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from users import views

urlpatterns = [
    path('', views.api_root),
    path('profiles/', views.ProfileList.as_view(), name='profiles-list'),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view(), name='profile-detail'),
    path('users/', views.UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', views.UserDetail.as_view(), name="user-detail"),
    path('users/create', views.UserAdd.as_view(), name="user-add"),
    path('login/', views.SingleProfile.as_view(), name="single-profile"),
]

urlpatterns = format_suffix_patterns(urlpatterns)