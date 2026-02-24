import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Profile from './features/auth/pages/Profile'
import Feed from './features/posts/pages/Feed'
 
function  AppRoutes(){
   return(
     <BrowserRouter>
    <Routes>
        <Route path='/' element= {<Feed/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Register/>} />
        <Route path='/profile' element={<Profile/>}  />

    </Routes>
    </BrowserRouter>
   )
}

export default AppRoutes