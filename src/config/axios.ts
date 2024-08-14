import axios from 'axios'


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

//Inyectando el token en los headers (En caso de haber un token)
api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})


export default api