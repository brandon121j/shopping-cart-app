import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './components/context/Context';

import './App.css';
import Checkout from './components/pages/Checkout';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
