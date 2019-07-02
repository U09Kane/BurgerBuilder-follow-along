import axios from 'axios';
import urls from './private/urls.json'

const instance = axios.create({
    baseURL: urls.firebase,
});

export default instance;