import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export const getUserPost = async()=>{
try{
    const response = await api.get("/api/posts")
    return response.data
}
catch(err){
    throw err
}
}
export const getMe = async ()=>{
    try{
        const response  = await api.get("/api/auth/me")
        return response.data
    }
    catch(err){
        console.log(err)
    }
}