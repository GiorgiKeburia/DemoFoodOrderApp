import classes from './MealsSummary.module.css';
import image from '../../assets/back.jpg';

const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>
				<span className={classes.span}>UBERE</span> Food Order App
			</h2>
			<div className={classes.box}>
				<p>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.Omnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. Historically, humans secured food through two main methods: hunting and gathering and agriculture. As agricultural technologies increased, humans settled into agriculture lifestyles with diets shaped by the agriculture opportunities in their geography.</p>
				<img className={classes.img} src={image} alt="img" />
			</div>
		</section>
	);
};

export default MealsSummary;
