import React from 'react'

const Following = () => {
  return (
    <div className="following-list">

            <h2>Following List</h2>
            <div className="user">
              <div className="user-detail">
                <img src="https://images.unsplash.com/photo-1770034849260-2e67f8f423a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Yugant</p>
              </div>
              <button>Following</button>
            </div>
            <div className="user">
              <div className="user-detail">
                <img src="https://plus.unsplash.com/premium_photo-1770931337801-6fa42e398958?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Yugant</p>
              </div>
              <button>Following</button>
            </div>
          </div>
  )
}

export default Following