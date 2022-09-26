import { useState } from 'react'

const Login = ({ onLogin, user }) => {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      }
    })
  }
  ///////////////////////* THIS SECTION IS FOR VALIDATION *//////////////////////////////
  // function handleLogout() {
  //   fetch("/http://localhost:3000/logout", {
  //     method: "DELETE",
  //   }).then(() => onLogout());
  // }

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ///////////////////////////////////////////////////////////////////////////////
        />
        <br />
        {/* <label>Password</label><br />
                <input type="text" name="password" placeholder="password"/><br /> */}
        <button type='submit'>Login</button>
      </form>

      {user.username ? <h1> Welcome {user.username}</h1> : null}
    </div>
  )
}

export default Login
