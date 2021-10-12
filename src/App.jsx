import './App.css';
// import { Button, Card, CardTitle, CardText} from 'reactstrap';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Cocina from './pages/Cocina';
import Menu from './pages/Menu';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Cocina' component={Cocina}/>
      <Route path='/Menu' component={Menu} />
    </Switch>
  ) 
}
