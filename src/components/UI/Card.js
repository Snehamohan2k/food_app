import classes from '../UI/Card.module.css';
const Card=props=>{
return <div className={classes.card}>
{/* return <div className={classes.container}> */}
{props.children}
</div>
}
export default Card;