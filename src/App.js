import { useState, useEffect } from 'react';
import { getStarships } from './services/sw-api';
import StarshipCard from './components/starshipCard/StarshipCard';

import './App.css';

import styled  from 'styled-components';

const StyledStarshipCard = styled.div`
  background-color: pink;
  height: 45vh;
  width: 50vh;
  box-shadow: 1px 1px 1px 3px lightpink;
  color: magenta;
  margin-bottom: 10px;
`;

function App() {

  const [starshipData, setStarshipData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  })

  

  async function getAppData() {
    const data = await getStarships();
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
