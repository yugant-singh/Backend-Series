import { createContext, useState } from "react";

export const ProfileContext = createContext()
export const ProfileProvider = ({ children }) => {
    const [userPosts, setUserPosts] = useState(null)
    const [loading, setLoading] = useState(false)

   
    return <ProfileContext.Provider value={{ userPosts, loading, setLoading, setUserPosts }}>
        {children}
    </ProfileContext.Provider>

}