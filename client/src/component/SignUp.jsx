import { useState, onLogin } from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(onLogin, history.push('/login'))
      } else {
        r.json().then((errorData) => setErrors(errorData.errors))
      }
    })

    // .then(onLogin)
  }

  console.log('error', errors)
  return (
    <div className='login bg-image2'>
      <div className='login-div bg-image3'>
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
          <label htmlFor='username'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label htmlFor='password_confirmation'>Confirm Password</label>
          <br />
          <input
            type='password'
            id='password_confirmation'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br />
          <button type='submit'>Create Account</button>
        </form>
        {errors.length > 0 && (
          <ul style={{ color: 'red' }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SignUp
