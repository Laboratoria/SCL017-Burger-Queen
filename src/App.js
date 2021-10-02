import './App.css';
import { Button, ButtonGroup } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <h1>CommitBar</h1>
      <Button color="secondary">Boton de prueba</Button>{' '}
      <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    </div>
  );
}


export default App;
