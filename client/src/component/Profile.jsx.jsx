const Profile = ({ user }) => {
  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <div className='profile-top'>Profile Page</div>

        <div className='profile-mid'>
          <div className='image-div'>
            <h2>{user.username}</h2>
            <img
              src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE='
              alt='placeholder'
            />
            <br />
            <button>Upload Image</button>
          </div>
          <div className='details-div'>
            <h4>points earned</h4>
          </div>
        </div>

        <div className='profile-bottom'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
