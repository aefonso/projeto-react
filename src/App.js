import './App.css';
import Coondicional from './components/Coondicional';
import OutraLista from './components/OutraLista';
function App() {

  const meusItems = ['React', 'Vue', 'Angular'] 

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <OutraLista itens={meusItems} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
