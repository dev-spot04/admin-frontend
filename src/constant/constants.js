const BASE_URL = "http://localhost:3005";

// admin api's

export const ADMIN_LOGIN = `${BASE_URL}/api/admin/login-admin`;
export const USER_COUNT_URL= `${BASE_URL}/api/user/count-total-users`
export const GET_BOOKING_COUNT = `${BASE_URL}/api/booking/total-booking-count`
export const UPDATE_ADMIN_PASS = `${BASE_URL}/api/admin/update-password`
export const GET_ALL_DJS = `${BASE_URL}/api/user/get-all-admin-dj`
export const GET_ALL_USERS = `${BASE_URL}/api/user/get-all-admin-user`
export const GET_ALL_BOOKINGS = `${BASE_URL}/api/booking/get-all-booking`
export const GET_USER_BOOKINGS = `${BASE_URL}/api/booking/get-admin-user-booking/638b475ee7d4bffe9358242e`
export const GET_DJ_RATINGS = `${BASE_URL}/api/booking/get-admin-dj-rating/638b481bf64654067ad7142a`
export const GET_DJ_CALANDER = `${BASE_URL}/api/booking/get-admin-dj-calendar/638b481bf64654067ad7142a`
