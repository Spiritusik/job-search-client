import { jwtDecode } from "jwt-decode";
import { $host, $authHost } from './hosts';

class UserApi {
    async registration (email: string, password: string, role = ['USER']) {
        const { data } = await $host.post('api/user/registration', {email, password, role})
        localStorage.setItem('token', data.accessToken);
        return jwtDecode(data.accessToken);
    }

    async login (email: string, password: string) {
        const { data } = await $host.post('api/user/login', {email, password})
        localStorage.setItem('token', data.accessToken);
        return jwtDecode(data.accessToken);
    };

    async logout () {
        await $authHost.post('api/user/logout');
        localStorage.removeItem('token');
    };

    async check () {
        const { data } = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.accessToken);
        return jwtDecode(data.accessToken);
    };
}

export const userApi = new UserApi();