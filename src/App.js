import './App.css';
import { useContext } from 'react';
import Schedule from "./containers/Schedule/Schedule";
import Characters from "./containers/Characters/Characters";
import Login from "./containers/Login/Login";
import Weapons from "./containers/Weapons/Weapons";
import Header from "./components/Header/Header";


import { Route, Switch, Redirect } from 'react-router-dom';

import Store from './store/Store';
import AuthContext from "./store/auth-context";



function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Store >
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            {authCtx.isLogin 
              ? <Login />
              : <Redirect to="/schedule" />  }
          </Route> 
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route path="/weapons">
            <Weapons />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
        </Switch>
        <footer> Footer</footer>
      </div>
    </Store>
  );
}

export default App;
