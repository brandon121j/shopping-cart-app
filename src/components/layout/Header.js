import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="headerContainer">
			<div>
				<Link to='/' style={{ textDecoration: 'none '}}>
				<h3>Store</h3>
				</Link>
			</div>
			<div id="shoppingCart">
				<Link to="/checkout" style={{ textDecoration: 'none '}}>
					<ShoppingCartIcon />
				</Link>
			</div>
		</div>
	);
};

export default Header;
