import { useState } from 'react'

const Login = ({ onLogin, user }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
        r.json().then((user) => onLogin(user))
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
    <div className='login-page'>
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
      {user ? <h1> Welcome {user.username}</h1> : null}
    </div>
  )
}

export default Login
