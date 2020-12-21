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
    <section className='cards'>
       <h3 id='ship'>{props.name}</h3>&nbsp;&nbsp;&nbsp;<p id='model'>{props.model}</p>
       <>
       {
        filmsData.results.map(function(film) {
          return(
            <table className='table'><Films 
            title={film.title}
            releaseDate={film.release_date}
            
            />
            </table>
          )
        })
      }
    </>
  </section>
)};



export default StarshipCard;