import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
	return (
		<div className="headerContainer">
			<div>
				<h3>Store</h3>
			</div>
			<div id='shoppingCart'>
				<ShoppingCartIcon />
			</div>
		</div>
	);
};

export default Header;
