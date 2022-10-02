import Login from './component/Login.jsx'
import HomePage from './component/HomePage.jsx'
import SignUp from './component/SignUp.jsx'
import Navbar from './component/Navbar.jsx'
import Profile from './component/Profile.jsx.jsx'
import History from './component/History.jsx'
import './component/App.css'
import { Route, Switch } from 'react-router-dom'

// import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

function App() {
  // const counter = useSelector(state => state.counter)
  // const isLogged = useSelector(state => state.isLogged)

  const [user, setUser] = useState({})
  const [restaurants, setRestaurants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => (setUser(user), setRestaurants(user?.restaurants)))
      }
    })
  }, [])

  const updateImage = (profileImage) => {
    setUser(user.id === profileImage.id ? profileImage : user)
  }

  const removeRestaurantFromHistory = (id) => {
    setRestaurants(restaurants?.filter((restaurant) => restaurant.id !== id))
  }

  const addNewRestaurantToHistory = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant])
  }

  const updateCount = (randomizerCount) => {
    setUser(user?.id === randomizerCount?.id ? randomizerCount : user)
  }
  // console.log(user.total_randomized)

  const searchResult = restaurants?.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  })

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
        <Route exact path='/'>
          <HomePage
            user={user}
            addNewRestaurantToHistory={addNewRestaurantToHistory}
            updateCount={updateCount}
          ></HomePage>
        </Route>
        <Route exact path='/profile'>
          <Profile
            user={user}
            updateImage={updateImage}
            restaurants={restaurants}
          ></Profile>
        </Route>
        <Route exact path='/history'>
          <History
            restaurants={restaurants}
            removeRestaurantFromHistory={removeRestaurantFromHistory}
            searchResult={searchResult}
            setSearch={setSearch}
          />
        </Route>
        {/* <Route exact path='/details'>
          <Details user={user} />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App
