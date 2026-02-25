import React from 'react'
import '../styles/sidebar.scss'
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className="sidebar">

      <h2 className="logo">Instagram</h2>

      <nav>
        <div className="nav-item " onClick={() => { navigate("/")}}>Home</div>
        <div className="nav-item" >Search</div>
        <div className="nav-item">Explore</div>
        <div className="nav-item">Reels</div>
        <div className="nav-item">Messages</div>
        <div className="nav-item">Notifications</div>
        <div className="nav-item" onClick={()=>{navigate("/create-post")}}>Create New Post</div>
        <div className="nav-item" onClick={() => { navigate("/profile")}}>Profile</div>
      </nav>

      <div className="more">More</div>

    </aside>
  );
};

export default Sidebar;


