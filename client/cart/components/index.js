import React from 'react';
import Footer from './footer';
import {Link} from 'react-router';

const Cart = ({children,carts,chooseAll,settle}) => (
	<div className="cart-wrap">
		<div className="cartbuy">
			{children}
			<Footer
				carts = {carts}
				chooseAll = {chooseAll}
				settle = {settle}
			/>
		</div>
	</div>
)

export default Cart
