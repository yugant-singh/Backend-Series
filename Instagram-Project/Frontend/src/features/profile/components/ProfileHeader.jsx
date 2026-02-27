const ProfileHeader = (props) => {

  console.log(props.user)
  return (
    <section className="profile__header">

      <div className="profile__avatar">
        <img src={props.user.profile_url} alt="avatar" />
      </div>

      <div className="profile__info">

        <div className="profile__username">
          <h2>{props.user.username}</h2>
          <button>Edit Profile</button>
        </div>

        <p className="profile__bio">
          {props.user.bio}
        </p>

      </div>

    </section>
  );
};

export default ProfileHeader;