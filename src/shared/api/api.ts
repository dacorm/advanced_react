import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $axios = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
