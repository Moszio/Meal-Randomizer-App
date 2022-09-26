import Login from './component/Login.jsx'
import HomePage from './component/HomePage.jsx'
import SignUp from './component/SignUp.jsx'
import Navbar from './component/Navbar.jsx'
import Rewards from './component/Rewards/Rewards.jsx'
import Profile from './component/Profile.jsx.jsx'
import './component/App.css'
import { Route, Switch } from 'react-router-dom'

// import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

function App() {
  // const counter = useSelector(state => state.counter)
  // const isLogged = useSelector(state => state.isLogged)

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <div>
      <Navbar onLogout={setUser} user={user} />
      <Switch>
        <Route exact path='/login'>
          <Login onLogin={setUser} user={user} onLogout={setUser}></Login>
        </Route>
        <Route exact path='/signup'>
          <SignUp onLogin={setUser}></SignUp>
        </Route>
        <Route exact path='/rewards'>
          <Rewards></Rewards>
        </Route>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route exact path='/profile'>
          <Profile user={user}></Profile>
        </Route>
      </Switch>
    </div>
  )
}

export default App
