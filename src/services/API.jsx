import axios from "axios"

const API_URL = "https://dogbreed-api.q9.com.br"

const api = axios.create({
    baseURL: API_URL
})

export default api