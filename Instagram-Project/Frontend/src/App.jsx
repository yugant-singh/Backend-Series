import React from 'react'
import './style.scss'
import AppRoutes from './AppRoutes'
import {AuthProvider} from './features/auth/auth.context'
import { PostProvider } from './features/posts/post.context'
import { ProfileProvider } from './features/profile/profile.context'
const App = () => {
  return (
    <AuthProvider>
     <PostProvider>
    <ProfileProvider>
         <AppRoutes/>
    </ProfileProvider>
     </PostProvider>
    </AuthProvider>
  )
}

export default App