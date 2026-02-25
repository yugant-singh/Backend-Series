import { useContext } from "react";
import { PostContext } from "../post.context";
import {getFeed ,createPost} from '../services/post.api'

export const usePost= ()=>{
    
const context = useContext(PostContext)
const {loading,post,feed,setLoading,setpost,setfeed} = context


const getFeedHandler = async ()=>{
    setLoading(true)
    try{
        const response = await getFeed()
        setfeed(response.posts)
    }
    catch(err){
        throw err
    }
    finally{
        setLoading(false)
    }
}
const createPostHandler = async(file,caption)=>{
    setLoading(true)
    try{
        const response = await createPost(file,caption)
        setfeed([response.post,...feed])
    }
    catch(err){
        throw err
    }
    finally{
        setLoading(false)
    }
}

return {loading,post,feed,getFeedHandler,createPostHandler}
}