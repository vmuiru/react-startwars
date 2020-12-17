import Films from './Films/Films';
import './App.css';

const StarshipCard = (props) => {
  return (
    <div className='Starship'>
       <h2>{props.name}</h2>
       <p>{props.model}</p>
       <Films />
  </div>
)};



export { StarshipCard };