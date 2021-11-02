import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1 className={classes.h1}>UBERE</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
		</Fragment>
	);
};

export default Header;
