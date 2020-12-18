import { useState, useEffect } from 'react';
import Films from './Films/Films';
import '../../App.css';
import { getFilms } from '../../services/sw-api';


const StarshipCard = (props) => {

  const [filmsData, setFilmsData] = useState({
    count: 0,
    results: []
  
  })
  
  async function getFilmData() {
    const movies= await getFilms();
      setFilmsData(movies);
  
  }

  useEffect(() => {
    getFilmData();
  }, []);


  return (
    <div className='Starship'>
       <h2>{props.name}</h2>
       <p>{props.model}</p>
       <div className='cards'>
      {
        filmsData.results.map(function(film) {
          console.log(film)
          return(
            <ul id='movies'><Films 
            title={film.title}
            releaseDate={film.release_date}
            
            />
            </ul>
          )
        })
      }
    </div>
  </div>
)};



export default StarshipCard;