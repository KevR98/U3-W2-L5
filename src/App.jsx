import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './assets/components/MyNavbar';
import Footer from './assets/components/Footer';
import Welcome from './assets/components/Welcome';
// import Home from './assets/components/Home';
import { useState } from 'react';
import SingleWeather from './assets/components/SingleWeather';
import Dropdown from './assets/components/DropDown';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className='vh-100 d-flex flex-column'>
      <BrowserRouter>
        <MyNavbar />
        <div className='flex-grow-1 bg-body-tertiary'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Welcome />
                  <Home />
                </>
              }
            />
            <Route
              path='/SearchWeather'
              element={
                <>
                  {/* Passo la props della selezione nel welcome allo stato settandolo*/}
                  <Dropdown cityChange={setSearch} />
                  {/* Prendo lo stato settato con la prop welcome */}
                  <SingleWeather search={search} />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
