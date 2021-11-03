import { useContext } from 'react';

import CartContext from '../../Store/Cart-context';
import classes from './Header.cart.button.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	return (
		<button onClick={props.onClick} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
