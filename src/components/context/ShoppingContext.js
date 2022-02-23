import React, { useReducer } from 'react';

export const ShoppingContext = React.createContext();

const actions = {
	addProduct: 'addToCart',
	removeProduct: 'removeFromCart',
};

const { addProduct, removeProduct } = actions;

export const ShoppingProvider = (props) => {
	const { children } = props;
	let cartCheckout = [];

	const cartReducer = (cart, action) => {
		switch (action.type) {
			case addProduct:
				const inCart = cart.find(
					(cartItem) => cartItem.id === action.product.id
				);

				if (!inCart) {
					return [...cart, { ...action.product, quantity: 1 }];
				}

				const cartWithFoundItemRemoved = cart.filter(
					(item) => item.id !== action.product.id
				);

				return [
					...cartWithFoundItemRemoved,
					{ ...action.product, quantity: inCart.quantity + 1 },
				];
			case removeProduct:
				return cart.filter((item) => item.id !== action.id);
				
			default:
				return cart;
		}
	};

	const [cart, dispatch] = useReducer(cartReducer, cartCheckout);

	const addToCart = (item) => {
		dispatch({
			type: addProduct,
			product: {
				id: item.id,
				title: item.title,
				price: item.price,
				image: item.image,
				quantity: 1,
			},
		});
	};

	const removeFromCart = (item) => {
		dispatch({
			type: removeProduct,
			id: item,
		});
	};

	return (
		<ShoppingContext.Provider
			value={{ cart, addToCart, removeFromCart }}
		>
			{children}
		</ShoppingContext.Provider>
	);
};

// export default ShoppingContext;
