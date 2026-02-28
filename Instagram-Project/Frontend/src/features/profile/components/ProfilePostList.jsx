
const ProfilePostList = ({userPosts}) => {
console.log(userPosts)
  return (
    <section className="profile__posts">

     {userPosts.map(function(userPost,idx){

      return <div key={idx}  className="post">

        <img src={userPost.imgUrl} alt="img" />
        <p>{userPost.caption}</p>
      </div>
     })}

    </section>
  );
};

export default ProfilePostList;