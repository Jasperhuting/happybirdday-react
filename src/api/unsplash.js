import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Dv6ii4UHWWrOttjer25Lnnt6o2InLmQ2N-7rUEKsf3c'
    }
});
