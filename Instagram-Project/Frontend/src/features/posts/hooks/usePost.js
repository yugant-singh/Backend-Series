import { useContext } from "react";
import { PostContext } from "../post.context";
import {getFeed} from '../services/post.api'

export const usePost= ()=>{
    
const context = useContext(PostContext)
const {loading,post,feed,setLoading,setpost,setfeed} = context


const getFeedHandler = async ()=>{
    setLoading(true)
    try{
        const response = await getFeed()
        setfeed(response.posts)
    }
    catch(err){}
    finally{
        setLoading(false)
    }
}

return {loading,post,feed,getFeedHandler}
}