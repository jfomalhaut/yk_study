import Axios from 'axios';

const API = 'http://localhost:4000/api';
let url = '';

const postRequest = async (url, payload) => {
    return await Axios.post(`${API}/${url}`, payload);
}

const getRequest = async (url) => {
    return await Axios.get(`${API}/${url}`);
}

export const GetData = () => {
    url = 'getData';
    return getRequest(url);
};

export const GetDetail = (payload) => {
    url = 'getDetail';
    return postRequest(url, payload);
};