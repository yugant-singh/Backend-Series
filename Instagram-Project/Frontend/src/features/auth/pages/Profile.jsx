import React, { use, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const Profile = () => {
    const { handleGetMe, user, loading } = useAuth()


    async function getData() {
      const response  =   await handleGetMe()

     console.log(user)
        
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
    
        {user && <div>
            <h1>{user.username}</h1>
            <img src={user.profile_url} alt="" />
            <h2>{user.email}</h2>
            <h2>{user.id}</h2>
            </div>}
          
        </div>
    )
}

export default Profile