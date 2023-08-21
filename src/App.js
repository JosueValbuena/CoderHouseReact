import './App.css';
import Routers from './router/Routers';
import NavBar from './components/NavBar';
import { DataProvider } from './context/CartProvider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <NavBar />
        <Routers />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
