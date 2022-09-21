
import './style/App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Rewards from './Rewards';
// import { useEffect,useState } from 'react';

function App() {

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
          <Login onLogin={handleLoginUser} user={user}></Login>
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
