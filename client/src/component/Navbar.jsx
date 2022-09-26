import { Link } from 'react-router-dom'

const Navbar = ({ onLogout, user }) => {
  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout(null))
  }

  return (
    <div className='navbar-container'>
      <div className='application-name'></div>
      <div className='navbar-controllers'>
        <Link to='/'>
          <div>Home</div>
        </Link>
        <Link to='/profile'>
          <div>Profile</div>
        </Link>
        <Link to='/rewards'>
          <div>Rewards</div>
        </Link>
        {user ? (
          <div onClick={handleLogout}>Logout</div>
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
    </div>
  )
}

export default Navbar
