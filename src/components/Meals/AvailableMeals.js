import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItems';
import Card from '../UI/Card';
import { useEffect,useState } from 'react';
// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Mini Meals',
//       description: 'With a variety of items',
//       price: 70,
//     },
//     {
//       id: 'm2',
//       name: 'Veg Biriyani',
//       description: 'An Indian flavour you can never forget',
//       price: 150,
//     },
//     {
//       id: 'm3',
//       name: 'Panner Butter Masala',
//       description: 'The aroma takes you anywhere',
//       price: 120,
//     },
//     {
//       id: 'm4',
//       name: 'Chappathi',
//       description: 'Try out with variety of side dish',
//       price: 20,
//     },
//   ];
const AvailableMeals=()=>{
  const[meals,setmeals]=useState();
//definetely this component will load so true
  const[isLoading,setisLoading]=useState(true);
  //state for http error, initialy undefined
  const [httpError,sethttpError]=useState();
//this function will run only once when the function is first loaded bcoz no dependencies
  //useeffet becoz to see if the data has changed or sideeffects
      useEffect(()=>{
      const fetchmeals=async()=>{
    
      const response=await fetch('https://react-http-d0728-default-rtdb.firebaseio.com/meals.json');
      //if the response is not ok
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      
      const responseData=await response.json();
//the data from firebase is an object so convert to array
      const loadedmeals=[];
      for (const key in responseData){
        loadedmeals.push({
          id: key,
          //access the (m1m2,m3,m4) as they are the keys
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price
        })
      }
      //updating state after transforming data
      setmeals(loadedmeals);
      //we are done with loading so false
      setisLoading(false)
    };

   

      fetchmeals().catch((error)=>{
        setisLoading(false);
        sethttpError(error.message);
      });
      
  
  },[]);

    if(isLoading){
      return <section className={classes.MealsLoading}>
        <p>  Loading...</p></section>
    }


    if(httpError)
{
  return<section className={classes.Mealserror}>
    <p>{httpError}</p>
  </section>
}
    const mealsList= meals.map((meal)=>(
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