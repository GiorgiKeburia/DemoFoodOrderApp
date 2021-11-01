import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import './app.css';
function App() {
	return (
		<Fragment>
			<Header />
			<div className="main">
				<Meals />
			</div>
		</Fragment>
	);
}

export default App;
