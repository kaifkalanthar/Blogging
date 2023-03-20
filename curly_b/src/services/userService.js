import http from './httpService';

const apiEndPoint = "http://localhost:4000/register";

export function register(user) {
    return http.post(apiEndPoint, {
        username: user.username,
        name: user.name,
        password: user.password
    })
}