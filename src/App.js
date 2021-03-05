import './App.css';
import Schedule from "./containers/Schedule/Schedule";
import Characters from "./containers/Characters/Characters";
import Weapons from "./containers/Weapons/Weapons";
import Header from "./components/Header/Header";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/characters' component={Characters} />
      <Route path='/weapons' component={Weapons} />
      <Route path='/' exact component={Schedule} />
      <footer> Footer</footer>
    </div>
  );
}

export default App;
