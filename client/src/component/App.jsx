
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Rewards from './Rewards';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/login">
          <Login></Login>
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
