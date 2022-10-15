import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useThemeHook} from './GlobalComponent/ThemeProvider';
import Header from './component/Header';
import {Router} from '@reach/router';

//pages

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'} style={{height:'100vh', overflowY:'auto'}} >
     <Header/>
     <Router>
     <Home path="/"/>
     <Cart path="/cart"/>
     </Router>
    </main>
  );
}

export default App;
