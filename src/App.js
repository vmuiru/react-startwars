import { useState, useEffect } from 'react';
import { getStarships, getFilms } from './services/sw-api';
import { StarshipCard } from './components/starshipCard/StarshipCard';

import './App.css';

import styled  from 'styled-components';

const StyledStarshipCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: pink;
  height: 25vh;
  width: 30vh;
  box-shadow: 3px 3px 3px 5px lightpink;
  color: magenta;
  align-items: center;
`;

function App() {

  const [starshipData, setStarshipData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  })

  const [filmsData, setFilmsData] = useState({
    count: 0,
    results: []

  })

  async function getAppData() {
    const data = await getStarships();
    const movies= await getFilms();
    setFilmsData(movies);
    setStarshipData(data);

  }

  useEffect(() => {
    getAppData();
    console.log('effect')
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT Star Wars</h1>
      </header>
      <div className='cards'>
      {
        starshipData.results.map(function(ship) {
          return(
            <StyledStarshipCard>
            <StarshipCard 
            name={ship.name}
            model={ship.model}
            title={films.title}
            
            />
            </StyledStarshipCard>
          )
        })
      }
    </div>
    </div>
  );
    }
export default App;
