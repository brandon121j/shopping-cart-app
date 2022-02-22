import React from 'react';
import CheckoutHooks from '../hooks/CheckoutHooks';

const Checkout = () => {
    const [cart] = CheckoutHooks();
  return (
    <div className='checkoutContainer'>
        <h1>CHECK OUT</h1>
        {cart.map((item) => {
            return (
                <>
                    <p></p>
                </>
            )
        })}
    </div>
  )
}

export default Checkout