import React, { useEffect, useState, useContext } from 'react';
import { ShoppingContext } from '../context/ShoppingContext';
import Layout from '../layout/Layout';
import { Card, Button } from 'react-bootstrap';
import { fetchProducts } from '../data/ShoppingItems';


const Home = () => {
	const {cart, addToCart} = useContext(ShoppingContext);
	const [shop, setShop] = useState();
	
	useEffect(() => {
		fetchProducts().then((data) => setShop(data));
	}, []);
	

	const addToCheckout = (item) => {
		addToCart(item);
		console.log(cart);
	}

	return (
		<Layout>
			<div className="homeContainer">
				<h1>HOME PAGE</h1>
				<div className="productsDisplay">
					{shop ? (
						shop.map((shop) => {
							return (
								<div className="eachCard" key={shop.id}>
									<Card style={{ width: '18rem', height: '20rem', maxHeight: '25rem' }}>
										<Card.Img variant="top" src={shop.image} style={{ cursor: 'pointer', height: '10rem'}}/>
										<Card.Body>
											<Card.Title style={{ cursor: 'pointer'}}>{shop.title}</Card.Title>
											<Card.Text style={{maxHeight: '5rem'}}>{shop.description}</Card.Text>
											<Button variant="primary" type='submit' onClick={() => addToCheckout(shop)}>Add to Cart</Button>
										</Card.Body>
									</Card>
								</div>
							);
						})
					) : (
						<h1>LOADING</h1>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Home;
