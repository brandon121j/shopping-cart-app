import React, { useContext } from 'react';
import Layout from '../layout/Layout';
import { ShoppingContext } from '../context/ShoppingContext';
import { Card, Button } from 'react-bootstrap';

const Checkout = () => {
	const { cart, removeFromCart } = useContext(ShoppingContext);

    const removeProduct = (item) => {
        removeFromCart(item);
        console.log(item);
    }

	return (
		<Layout>
			<div className="checkoutContainer">
				<h1>CHECK OUT</h1>
				<div className="productsDisplay">
					{cart ? (
						cart.map((products) => {
							return (
								<div className="eachCard" key={products.id}>
									<Card
										style={{
											width: '18rem',
											height: '20rem',
											maxHeight: '25rem',
										}}
									>
										<Card.Img
											variant="top"
											src={products.image}
											style={{ cursor: 'pointer', height: '10rem' }}
										/>
										<Card.Body>
											<Card.Title style={{ cursor: 'pointer' }}>
												{products.title}
											</Card.Title>
											<Card.Text style={{ maxHeight: '5rem' }}>
												{products.description}
											</Card.Text>
											<Button
												variant="primary"
												type="submit"
												onClick={() => removeProduct(products.id)}
											>
												Remove from cart
											</Button>
										</Card.Body>
                                        <Card.Footer>Quantity: {products.quantity}</Card.Footer>
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

export default Checkout;
