import Plato, { Bandera } from './components/dish';
import Header from './components/header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Plato></Plato>
        <Bandera></Bandera>
    </div>
  );
}

export default App;
