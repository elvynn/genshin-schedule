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
            {!authCtx.isLogin 
              ? <Login />
              : <Redirect to="/schedule" /> }
          </Route> 
          <Route exact path="/characters">
            {authCtx.isLogin 
              ? <Characters />
              : <Redirect to="/" /> }
          </Route>
          <Route exact path="/weapons">
            {authCtx.isLogin 
              ?  <Weapons />
              : <Redirect to="/" /> }
          </Route>
          <Route exact path="/schedule">
            {authCtx.isLogin 
              ?  <Schedule />
              : <Redirect to="/" /> }
          </Route>
          <Route path="*">
            {authCtx.isLogin 
              ? <Login />
              : <Redirect to="/schedule" />  }
          </Route> 
        </Switch>
        <footer> Footer</footer>
      </div>
    </Store>
  );
}

export default App;
