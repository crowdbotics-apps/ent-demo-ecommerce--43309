import axios from "axios";
const entdemoecommerceAPI = axios.create({
  baseURL: "https://ent-demo-ecommerce--43309.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return entdemoecommerceAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_entry_list(payload) {
  return entdemoecommerceAPI.get(`/api/v1/entry/`);
}

function api_v1_entry_create(payload) {
  return entdemoecommerceAPI.post(`/api/v1/entry/`, payload.data);
}

function api_v1_entry_retrieve(payload) {
  return entdemoecommerceAPI.get(`/api/v1/entry/${payload.id}/`);
}

function api_v1_entry_update(payload) {
  return entdemoecommerceAPI.put(`/api/v1/entry/${payload.id}/`, payload.data);
}

function api_v1_entry_partial_update(payload) {
  return entdemoecommerceAPI.patch(`/api/v1/entry/${payload.id}/`, payload.data);
}

function api_v1_entry_destroy(payload) {
  return entdemoecommerceAPI.delete(`/api/v1/entry/${payload.id}/`);
}

function api_v1_login_create(payload) {
  return entdemoecommerceAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_shopping_cart_list(payload) {
  return entdemoecommerceAPI.get(`/api/v1/shopping_cart/`);
}

function api_v1_shopping_cart_create(payload) {
  return entdemoecommerceAPI.post(`/api/v1/shopping_cart/`, payload.data);
}

function api_v1_shopping_cart_retrieve(payload) {
  return entdemoecommerceAPI.get(`/api/v1/shopping_cart/${payload.id}/`);
}

function api_v1_shopping_cart_update(payload) {
  return entdemoecommerceAPI.put(`/api/v1/shopping_cart/${payload.id}/`, payload.data);
}

function api_v1_shopping_cart_partial_update(payload) {
  return entdemoecommerceAPI.patch(`/api/v1/shopping_cart/${payload.id}/`, payload.data);
}

function api_v1_shopping_cart_destroy(payload) {
  return entdemoecommerceAPI.delete(`/api/v1/shopping_cart/${payload.id}/`);
}

function api_v1_shopping_cart_items_list(payload) {
  return entdemoecommerceAPI.get(`/api/v1/shopping_cart_items/`);
}

function api_v1_shopping_cart_items_create(payload) {
  return entdemoecommerceAPI.post(`/api/v1/shopping_cart_items/`, payload.data);
}

function api_v1_shopping_cart_items_retrieve(payload) {
  return entdemoecommerceAPI.get(`/api/v1/shopping_cart_items/${payload.id}/`);
}

function api_v1_shopping_cart_items_update(payload) {
  return entdemoecommerceAPI.put(`/api/v1/shopping_cart_items/${payload.id}/`, payload.data);
}

function api_v1_shopping_cart_items_partial_update(payload) {
  return entdemoecommerceAPI.patch(`/api/v1/shopping_cart_items/${payload.id}/`, payload.data);
}

function api_v1_shopping_cart_items_destroy(payload) {
  return entdemoecommerceAPI.delete(`/api/v1/shopping_cart_items/${payload.id}/`);
}

function api_v1_signup_create(payload) {
  return entdemoecommerceAPI.post(`/api/v1/signup/`, payload.data);
}

function rest_auth_login_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return entdemoecommerceAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return entdemoecommerceAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return entdemoecommerceAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return entdemoecommerceAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return entdemoecommerceAPI.patch(`/rest-auth/user/`, payload.data);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_entry_list,
  api_v1_entry_create,
  api_v1_entry_retrieve,
  api_v1_entry_update,
  api_v1_entry_partial_update,
  api_v1_entry_destroy,
  api_v1_login_create,
  api_v1_shopping_cart_list,
  api_v1_shopping_cart_create,
  api_v1_shopping_cart_retrieve,
  api_v1_shopping_cart_update,
  api_v1_shopping_cart_partial_update,
  api_v1_shopping_cart_destroy,
  api_v1_shopping_cart_items_list,
  api_v1_shopping_cart_items_create,
  api_v1_shopping_cart_items_retrieve,
  api_v1_shopping_cart_items_update,
  api_v1_shopping_cart_items_partial_update,
  api_v1_shopping_cart_items_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};