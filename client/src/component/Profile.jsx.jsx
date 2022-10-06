import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Badges from './Badges.jsx'
import './Style/Profile.css'
import { FiSettings } from 'react-icons/fi'

const Profile = ({ user, updateImage, restaurants }) => {
  const [collapse, setCollapse] = useState(false)
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
    await fetch(`/users/${user.id}`, {
      method: 'DELETE',
    })
    history.push('/login')
  }
  // console.log(user.username)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <div className='profile-page bg-image2'>
      <div className='profile-container'>
        <div className='profile-top'>
          <div className='image-div'>
            <img
              src={
                user.image
                  ? user?.image
                  : 'https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE='
              }
              alt='placeholde r'
            />
          </div>
          <div className='details-div'>
            <h4>Randomizer</h4>
            <h6>{user?.total_randomized}</h6>
          </div>
          <div className='details-div'>
            <h4>Favourites</h4>
            <h6>{restaurants?.length > 0 ? restaurants?.length : ''}</h6>
          </div>
          <div className='details-div'></div>
        </div>
        <div className='profile-mid'>
          <div className='profile-mid-sec1'>
            {user ? <h1> Welcome {user.username}</h1> : ''}

            <h4 onClick={handleCollapse}>
              <FiSettings />
            </h4>
            {collapse ? (
              <div className='profile-dropdown'>
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
            ) : null}
          </div>
          <div className='profile-mid-sec2'>Badges Earned</div>
        </div>
        <div className='profile-bottom'>
          <div className='profile-bottom-sec1'>
            {user ? (
              <h6>
                Account created <br />
                {user.created_at}
              </h6>
            ) : (
              ''
            )}
          </div>
          <div className='profile-bottom-sec2'>
            <Badges total={user?.total_randomized} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
