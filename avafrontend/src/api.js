import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000,
});

export const login = async (userDetails) => {
    try {
        const response = await apiClient.post('/auth/login', userDetails);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const register = async (userDetails) => {
    try {
        const response = await apiClient.post('/auth/register', userDetails);
        return response;
    } catch (error) {
        return error.response;
    }
};
