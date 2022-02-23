import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ShoppingProvider } from './components/context/ShoppingContext'

import './App.css';
import Checkout from './components/pages/Checkout';
import Home from './components/pages/Home';

// export const CartContext = React.createContext()

function App() {


	return (
		<div className="App">
			<ShoppingProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/checkout" element={<Checkout />}></Route>
					</Routes>
				</BrowserRouter>
			</ShoppingProvider>
		</div>
	);
}

export default App;
