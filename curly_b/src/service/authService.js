import http from './httpService';
import apiUrl from '../config.json';
import jwtDecode from 'jwt-decode';
const { apiUrl: ApiUrl } = apiUrl;
const apiEndpoint = ApiUrl + "api/auth";
export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, {
        email: email,
        password: password
    });
    localStorage.setItem("token", jwt);
}
export function logout() {
    localStorage.removeItem("token");
}
export function loginWithJwt(jwt) {
    localStorage.setItem("token", jwt);
}
export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt);
        return user;
    } catch (ex) { }
}
export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt
}
