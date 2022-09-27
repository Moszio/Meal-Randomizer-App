import { useState } from 'react'

const Profile = ({ user, updateImage }) => {
  const [image, setImage] = useState('')

  const updateProfileImage = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: image }),
    })
      .then((req) => req.json())
      .then((data) => updateImage(data))
  }

  // console.log(user.image)

  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <div className='profile-top'>Profile Page</div>

        <div className='profile-mid'>
          <div className='image-div'>
            {user ? <h1> Welcome {user.username}</h1> : ''}
            <img
              src={user ? user.image : ''}
              // src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE='
              alt='placeholder'
            />
            <br />
            {/* <button>Upload Image</button> */}
            <form onSubmit={updateProfileImage}>
              <input
                type='text'
                id='imageupdate'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input type='submit' />
            </form>
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
