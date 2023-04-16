import http from './httpService';
import apiUrl from '../config.json';
export function register(data) {
    const { apiUrl: ApiUrl } = apiUrl;
    const apiEndpoint = ApiUrl + "api/register";
    return http.post(apiEndpoint, {
        name: data.username,
        email: data.email,
        password: data.password
    });
}

export default register;

