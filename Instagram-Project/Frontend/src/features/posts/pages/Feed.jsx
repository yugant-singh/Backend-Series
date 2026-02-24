import React, { useEffect } from 'react'
import  '../style/feed.scss'
import Post from '../components/Post'
import {usePost} from '../hooks/usePost'
const Feed = () => {

  const {loading,feed,post,getFeedHandler} = usePost()

  useEffect(()=>{
    getFeedHandler()
  },[])
  

  if(loading || !feed){
    return <main><h1>Feed Loading....</h1></main>
  }

  

  return (
    <main>
        <div className="feed-page">
           <div className="feed">
             <div className="posts">
             
             {feed.map(function(post){
return <Post key={post._id}  {...post}/>

             })}
              
            </div>
           </div>
        </div>
    </main>
  )
}

export default Feed