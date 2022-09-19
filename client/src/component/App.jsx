
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Rewards from './Rewards';
import { useEffect,useState } from 'react';

function App() {


  const [user, setUser] = useState(null)


  const fetchUrl = async () => {
    const request = await fetch("url")
    const response = await request.json()
    setUser(response)
  }

  useEffect(() => {
    fetchUrl()
  }, [])



  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser}></Login>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="/rewards">
          <Rewards></Rewards>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
