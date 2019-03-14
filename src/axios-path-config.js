import axios from 'axios';

export const axiosMain = axios.create({
    baseURL: 'http://localhost:8080/api/',
})

export const nbrdAPi = axios.create({
    baseURL: 'http://www.nbrb.by/API/',
})