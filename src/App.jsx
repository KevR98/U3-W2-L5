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
    <div className='vh-100 d-flex flex-column'>
      <MyNavbar />
      {/* Passo la props della selezione nel welcome allo stato settandolo*/}
      <div className='flex-grow-1 bg-body-tertiary'>
        <Welcome cityChange={setSearch} />
        {/* Prendo lo stato settato con la prop welcome */}
        <Home search={search} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
