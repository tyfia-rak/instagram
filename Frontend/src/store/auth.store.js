import { create } from 'zustand'
import { handleLogin } from '../helpers/auth.helper';

export const useAuthStore = create((set) => ({
    auth: null,
    logout: () => set({ auth: null }),
}))

export const AuthLogin = async (data) => {
    const res = await handleLogin(data);
    if (res.success) {
        localStorage.setItem('infoUser', JSON.stringify(res.data));
        useAuthStore.setState(() => ({ auth: res.data }))
        return true
    }
    return false
}

export const checkUser = async () => {
    const info = localStorage.getItem('infoUser');
    console.log(info)
    if (info)
        useAuthStore.setState(() => ({ auth: JSON.parse(info) }))
}