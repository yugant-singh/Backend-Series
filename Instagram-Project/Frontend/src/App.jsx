import React from 'react'
import './style.scss'
import AppRoutes from './AppRoutes'
import {AuthProvider} from './features/auth/auth.context'
import { PostProvider } from './features/posts/post.context'
const App = () => {
  return (
    <AuthProvider>
     <PostProvider>
       <AppRoutes/>
     </PostProvider>
    </AuthProvider>
  )
}

export default App