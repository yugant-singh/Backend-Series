import React from 'react'

const Card = (props) => {

    
  return (
  <div className="card">

        <img src={props.item.profileUrl} alt="ankur-img" />
        <div className="detail">
          <h2>{props.item.username}</h2>
          <h4>{props.item.role}</h4>
          <h5>{props.item.country}</h5>
          <p>{props.item.description}</p>
          <button>Delete User</button>

        </div>
      </div>
  )
}

export default Card