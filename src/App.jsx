import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './assets/components/MyNavbar';
import Footer from './assets/components/Footer';
import Welcome from './assets/components/Welcome';
import Home from './assets/components/Home';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  return (
    <>
      <MyNavbar />
      {/* Passo la props della selezione nel welcome allo stato settandolo*/}
      <Welcome cityChange={setSearch} />
      {/* Prendo lo stato settato con la prop welcome */}
      <Home search={search} />
      <Footer />
    </>
  );
}

export default App;
