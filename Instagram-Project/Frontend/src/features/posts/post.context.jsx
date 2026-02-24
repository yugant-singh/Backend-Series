import { createContext, useState } from "react";

export const PostContext = createContext()

export  const PostProvider = ({children})=>{

    const [loading, setLoading] = useState(false)
    const [post, setpost] = useState(null)
    const [feed, setfeed] = useState(null)

    return <PostContext.Provider value={{loading,post,feed,setLoading,setpost,setfeed}}>
        {children}
    </PostContext.Provider>

}