const dummyPosts = Array.from({ length: 9 });

const ProfilePostList = () => {

  return (
    <section className="profile__posts">

      {dummyPosts.map((_, index) => (

        <div key={index} className="post">

          <img
            src={`https://picsum.photos/400?random=${index}`}
            alt="post"
          />

        </div>

      ))}

    </section>
  );
};

export default ProfilePostList;