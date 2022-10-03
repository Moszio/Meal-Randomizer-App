import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Badges from './Badges.jsx'

const Profile = ({ user, updateImage, restaurants }) => {
  const [image, setImage] = useState('')
  const history = useHistory()
  const updateProfileImage = (e) => {
    e.preventDefault()
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: image }),
    })
      .then((req) => req.json())
      .then((data) => updateImage(data), setImage(''))
  }

  const handleDeleteAccount = async () => {
    const request = await fetch(`/users/${user.id}`, {
      method: 'DELETE',
    })
    history.push('/login')
  }
  // console.log(user.username)

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
            <button onClick={handleDeleteAccount}>Delete accoutn</button>
          </div>
          <div className='details-div'>
            <h4>points earned</h4>
            <h6>{user?.total_randomized}</h6>
          </div>
          <div className='details-div'>
            <h4>History</h4>
            <h6>{restaurants?.length}</h6>
          </div>
        </div>

        <div className='profile-bottom'>
          {/* {restaurants?.map((restaurant, index) => {
            return <ProfileRestVisited key={index} restaurant={restaurant} />
          })} */}
          <Badges total={user.total_randomized} />
        </div>
      </div>
    </div>
  )
}

export default Profile
