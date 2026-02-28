import React, { useEffect } from "react";
import '../style/profile.scss'
import { useProfile } from "../hooks/useProfile";
import { useAuth } from "../../auth/hooks/useAuth";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStatsList from "../components/ProfileStatsList";
import ProfileTabList from "../components/ProfileTabList";
import ProfilePostList from "../components/ProfilePostList";

const Profile = () => {

  const { userPosts, loading, getUserPostHandler } = useProfile();
  const { user, handleGetMe } = useAuth();

  // get logged user
  useEffect(() => {
    handleGetMe();
  }, []);

  // fetch posts after user available
  useEffect(() => {
    if (user) {
      getUserPostHandler();
    }
  }, [user]);



  return (
    <div className="profile">
   {user && <ProfileHeader user={user} />}
    <ProfileStatsList/>
    <ProfileTabList/>
   { userPosts && <   ProfilePostList userPosts ={userPosts} />}
   </div>
  );
};

export default Profile;