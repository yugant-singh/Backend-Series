import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000/api/posts",
    withCredentials:true
})

// /api/post | Method => GET

export const getAll