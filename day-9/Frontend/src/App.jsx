import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [users, setusers] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingUserID, setEditingUserID] = useState(null)
 
   

  function submitHandler(e){

    e.preventDefault();
   const {username,role,country,description,profileUrl} =e.target.elements
if(isEditing){
  axios.patch(`https://backend-series-rexm.onrender.com/api/users/${editingUserID}`,{

     username:username.value,
    role:role.value,
    country:country.value,
    description:description.value,
    profileUrl:profileUrl.value
  })
  .then(()=>{
    fetchUser()
    setIsEditing(false)
    setEditingUserID(null)
      e.target.reset() 
  })

}
else{


   //Create user
  axios.post('https://backend-series-rexm.onrender.com/api/users',{
    username:username.value,
    role:role.value,
    country:country.value,
    description:description.value,
    profileUrl:profileUrl.value
  })
  .then((res)=>{
    fetchUser()
 e.target.reset()
  })
}
   
    
  }

  function editUser(user){

    setIsEditing(true)
    setEditingUserID(user._id)
     document.querySelector('input[name="username"]').value = user.username
  document.querySelector('input[name="role"]').value = user.role
  document.querySelector('input[name="country"]').value = user.country
  document.querySelector('input[name="description"]').value = user.description
  document.querySelector('input[name="profileUrl"]').value = user.profileUrl
  }

//For Fetch User
  function fetchUser() {
    axios.get("https://backend-series-rexm.onrender.com/api/users")
      .then((result) => {
        setusers(result.data.users)
      })
  }
  //For Delete User
  function deleteUser(noteId) {
    axios.delete(`https://backend-series-rexm.onrender.com/api/users/${noteId}`)
      .then((res) => {

        fetchUser();

      })

  }
  useEffect(() => {
    fetchUser()
  }, [])



  return (
    <>
      <form className='form'onSubmit={submitHandler}  >
        <input type="text" name="username" placeholder='Enter username' />
        <input type="text" name="role" placeholder='Enter role' />
        <input type="text" name="country" placeholder='Enter city' />
        <input type="text" name="description" placeholder='Enter description' />
        <input type="text" name="profileUrl" placeholder='Enter imageUrl' />
        <button>{isEditing?"Update User":"Create User"}</button>
      </form>
      <div className='card-list'>

        {users.map(function (item,idx) {
          return <div key={idx} className="card">

            <img src={item.profileUrl} alt="" />
            <div className="detail">
              <h2>{item.username}</h2>
              <h4>{item.role}</h4>
              <h5>{item.country}</h5>
              <p>{item.description}</p>
              <div className="btn">
                <button onClick={() => {
                deleteUser(item._id)
              }}>Delete</button>
              <button onClick={() => {
                editUser(item)
              }}>Edit</button>
              </div>

            </div>
          </div>
        })}

      </div>
    </>
  )
}

export default App
