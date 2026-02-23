import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Profile from './features/auth/pages/Profile'
 
function  AppRoutes(){
   return(
     <BrowserRouter>
    <Routes>
        <Route path='/' element= {<h1>Instagram Home page</h1>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Register/>} />
        <Route path='/profile' element={<Profile/>}  />

    </Routes>
    </BrowserRouter>
   )
}

export default AppRoutes