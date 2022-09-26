import { useState, onLogin } from 'react'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <br />
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input
          type='text'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor='password_confirmation'>Confirm Password</label>
        <br />
        <input
          type='text'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default SignUp
