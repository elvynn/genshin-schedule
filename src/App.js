import './App.css';
import Schedule from "./containers/Schedule/Schedule";
import Characters from "./containers/Characters/Characters";
import Login from "./containers/Login/Login";
import Weapons from "./containers/Weapons/Weapons";
import Header from "./components/Header/Header";
import { Route } from 'react-router-dom';
import Store from './hoc/Store';


function App() {
  return (
    <Store >
      <div className="container">
        <Header />
        <Route path='/characters' component={Characters} />
        <Route path='/weapons' component={Weapons} />
        <Route path='/schedule'component={Schedule} />
        <Route path='/' component={Login} />
        <footer> Footer</footer>
      </div>
    </Store>
  );
}

export default App;
