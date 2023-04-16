import http from './httpService';
import apiUrl from '../config.json';

const { apiUrl: ApiUrl } = apiUrl;
const apiEndpoint = ApiUrl + "api/auth";
export function login(email, password) {
    return http.post(apiEndpoint, {
        email: email,
        password: password
    })
}
