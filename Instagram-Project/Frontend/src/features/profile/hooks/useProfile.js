import { useContext } from "react";
import { ProfileContext } from "../profile.context";
import {getUserPost,getMe} from '../services/profile.api'


export function useProfile(){
    
const context = useContext(ProfileContext)
    const {userPosts,loading,setLoading,setUserPosts} = context

    const getUserPostHandler = async()=>{
        setLoading(true)
        try{
            const response = await getUserPost()
            setUserPosts(response.posts)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

   

    return {userPosts,loading,getUserPostHandler}
}