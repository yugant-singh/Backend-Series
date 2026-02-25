import React, { useRef, useState,useEffect } from 'react'
import '../style/createpost.scss'
import {usePost} from '../hooks/usePost'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const [caption, setCaption] = useState("")
  const fileRef = useRef(null)
const {createPostHandler,loading,getFeedHandler} = usePost()
const navigate = useNavigate()
  async function submitHandle(e){
e.preventDefault()
const file  = fileRef.current.files[0]
await createPostHandler(file,caption)
navigate("/")

  }
useEffect(()=>{
  getFeedHandler()
},[])
  if(loading){
    return <main><h1>Creating Post</h1></main>
  }
  return (
    <main>
      <div className="form-container">
        <h1>Create Post</h1>
        <form onSubmit={submitHandle}>
          <label className='label' htmlFor="postImage">Choose File</label>
          <input ref={fileRef} createPostRef hidden type="file" name="postImage" id="postImage" />
         <textarea 
         name="caption" 
         id="caption" 
         placeholder='Write Caption'
         
         onChange={(e)=>{setCaption(e.target.value)}}
         value={caption}
         >
        
         </textarea>
          <button>Create</button>
        </form>
      </div>
    </main>
  )
}

export default CreatePost