import { useState } from 'react'
import './Style/LoginSignUp.css'
import { useHistory } from 'react-router-dom'

const Login = ({ onLogin, user }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user), history.push('/'))
      } else {
        r.json().then((errorData) => setErrors(errorData.error))
      }
    })
  }

  //   const handleLogout = () => {
  //     fetch('/logout', {
  //       method: 'DELETE',
  //     }).then(() => onLogout({}))
  //   }

  //   console.log('username', username)

  return (
    <div className='login bg-image2 '>
      <div className='login-div bg-image3'>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br />
          <input
            type='text'
            id='username'
            autoComplete='off'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type='submit'>Login</button>
        </form>
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* {user ? <h1> Welcome {user.username}</h1> : null} */}
        {errors.length > 0 ? (
          <ul style={{ color: 'red' }}>
            <li>{errors}</li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Login
