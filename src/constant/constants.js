const BASE_URL = "http://localhost:3005";

// admin api's

export const ADMIN_LOGIN = `${BASE_URL}/api/admin/login-admin`;
export const USER_COUNT_URL= `${BASE_URL}/api/user/count-total-users`
export const UPDATE_ADMIN_PASS = `${BASE_URL}/api/admin/update-password`
export const GET_ALL_DJS = `${BASE_URL}/api/user/get-all-admin-dj`
export const GET_ALL_USERS = `${BASE_URL}/api/user/get-all-admin-user`