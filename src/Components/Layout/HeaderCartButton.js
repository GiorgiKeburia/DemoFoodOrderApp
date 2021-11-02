import classes from './Header.cart.button.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
	return (
		<button onClick={props.onClick} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span className={classes.badge}>8</span>
		</button>
	);
};

export default HeaderCartButton;
