import axios from 'axios';

export const handleLogin = async(data) => {
    try {
        const res = await axios.post('http://127.0.0.1:8080/login', data);
        if(res?.error){
            return {success: false, data: res.message} 
        }
        return {success: true, data: res.data} 
        
    } catch (error) {
        if(error.response){
            return {success: false, data: error.response.data.message} 
        }
    }
}

export const handleRegister = async(data) => {
    try {
        const res = await axios.post('http://127.0.0.1:8080/users', data);
        if(res?.error){
            return {success: false, data: res.message} 
        }
        return {success: true, data: res.data} 
        
    } catch (error) {
        if(error.response){
            return {success: false, data: error.response.data.message} 
        }
    }
}