import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItems';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Mini Meals',
      description: 'With a variety of items',
      price: 200,
    },
    {
      id: 'm2',
      name: 'Veg Biriyani',
      description: 'An Indian flavour you can never forget',
      price: 450,
    },
    {
      id: 'm3',
      name: 'Paneer Noodles',
      description: 'The aroma takes you anywhere',
      price: 400,
    },
    {
      id: 'm4',
      name: 'Chappathi',
      description: 'Try out with variety of side dish',
      price: 300,
    },
  ];
const AvailableMeals=()=>{
    const mealsList= DUMMY_MEALS.map((meal)=>(
    <MealItem 
    key={meal.id} 
    id={meal.id} 
    name={meal.name} 
    description={meal.description}
   price={meal.price}></MealItem>));
    return <section className={classes.meals}>
        <Card>
        <ul>
 {mealsList}
        </ul>
        </Card>
    </section>
}
export default AvailableMeals;