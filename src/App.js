import './App.css';
import Routers from './router/Routers';
import NavBar from './components/NavBar';
import { DataProvider } from './context/CartProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <NavBar />
        <Routers />
      </DataProvider>
    </div>
  );
}

export default App;
