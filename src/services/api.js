const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api-blog-lczpln.herokuapp.com/'
})

export default api;