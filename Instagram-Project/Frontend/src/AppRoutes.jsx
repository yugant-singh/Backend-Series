import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Profile from './features/auth/pages/Profile'
import Feed from './features/posts/pages/Feed'


import CreatePost from './features/posts/pages/CreatePost'
import MainLaout from './features/layout/components/MainLaout'
 
function  AppRoutes(){
   return(
     <BrowserRouter>
    <Routes>
      <Route element={<MainLaout/>}>
          <Route path='/' element= {<Feed/>} />
           <Route path='/profile' element={<Profile/>}  />
        
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>

 <Route path='/register'element={<Register/>} />
       <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   )
}

export default AppRoutes