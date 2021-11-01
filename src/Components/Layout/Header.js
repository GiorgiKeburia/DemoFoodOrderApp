import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealBigImage from '../../assets/mealbig.jpg';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1 className={classes.h1}>UBERE</h1>
				<HeaderCartButton />
			</header>
			{/* <div>
				<img className={classes['main-image']} src={mealBigImage} alt="A Big Img" />
			</div> */}
		</Fragment>
	);
};

export default Header;
