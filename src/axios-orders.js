import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://just-looking-3fe08.firebaseio.com/',
});

export default instance;