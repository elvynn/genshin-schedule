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
import Footer from './components/Footer/Footer';

function App() {
  const authCtx = useContext(AuthContext);
  let header=""; 
  if(authCtx.isLogin) header=<Header />;
  return (
    <Store >
      <div className="container">
       { header }
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
      </div>
      <Footer />
    </Store>
  );
}

export default App;
