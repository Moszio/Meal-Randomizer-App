
import Login from './component/Login.jsx';
import HomePage from './component/HomePage.jsx';
import SignUp from './component/SignUp.jsx';
import Navbar from './component/Navbar.jsx';
import Rewards from './component/Rewards.jsx';
import './component/App.css';
import { Route, Switch } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect,useState } from 'react';

function App() {

  // const counter = useSelector(state => state.counter)
  // const isLogged = useSelector(state => state.isLogged)


///////////////////////* THIS SECTION IS FOR VALIDATION *//////////////////////////////
  // const [user, setUser] = useState(null)
  //  useEffect(() => {
  //   fetch("http://localhost:3000/me")
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
///////////////////////* THIS SECTION IS FOR VALIDATION *//////////////////////////////
  // const fetchUrl = async () => {
  //   const request = await fetch("url")
  //   const response = await request.json()
  //   setUser(response)
  // }
///////////////////////* THIS SECTION IS FOR VALIDATION *//////////////////////////////
  // useEffect(() => {
  //   fetchUrl()
  // }, [])
///////////////////////* THIS SECTION IS FOR VALIDATION *//////////////////////////////
  // const handleLoginUser = () => {
  //   setUser(user)
  // }
//////////////////////////////////




  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/login">
          {/* <Login onLogin={handleLoginUser} user={user}></Login> */}
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="/rewards">
          <Rewards></Rewards>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
