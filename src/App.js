import { Fragment, useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import './app.css';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCarthandler = () => {
		setCartIsShown(true);
	};

	const hideCarthandler = () => {
		setCartIsShown(false);
	};

	return (
		<Fragment>
			{cartIsShown && <Cart onCloseCart={hideCarthandler} />}
			<Header onShowCart={showCarthandler} />
			<div className="main">
				<Meals />
			</div>
		</Fragment>
	);
}

export default App;
