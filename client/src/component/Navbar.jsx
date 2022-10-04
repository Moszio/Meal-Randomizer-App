import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import './Style/Navbar.css'
const Navbar = ({ onLogout, user }) => {
  const history = useHistory()
  const [collapse, setCollapse] = useState(false)

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout(null), history.push('/'))
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='application-name' onClick={() => history.push('/')}>
          Launch ROulette
        </div>
        <div
          className={
            collapse ? 'navbar-controllers-active' : 'navbar-controllers'
          }
        >
          {/* <Link to='/'>
            <div>Home</div>
          </Link>
          <Link to='/profile'>
            <div>Profile</div>
          </Link>
          <Link to='/history'>
            <div>History</div>
          </Link> */}
          {user ? (
            <>
              <Link to='/'>
                <div>Home</div>
              </Link>
              <Link to='/profile'>
                <div>Profile</div>
              </Link>
              <Link to='/history'>
                <div>History</div>
              </Link>
              <div onClick={handleLogout}>Logout</div>
            </>
          ) : (
            <>
              <Link to='/login'>
                <div>Login</div>
              </Link>
              <Link to='/signup'>
                <div>Signup</div>
              </Link>
            </>
          )}
        </div>
        <div className='hamburger' onClick={handleCollapse}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
