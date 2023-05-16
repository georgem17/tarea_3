import { useEffect, useState } from 'react';
import './App.css';
import { getLocationByld } from './services/getLocationByld';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/Location';
import Loader from './components/Loader/Loader';
import ResidentList from './components/ResidentList/ResidentList';
// import appimg from "./appimg";

function App() {
  const [location, setLocation] = useState(null);
 
  useEffect(() => {
    const loadLocation = async () => {
      const randomId = getRandomNumber(1, 126);
      const locationInfo = await getLocationByld(randomId);
      setLocation(locationInfo);
    };

    loadLocation();
  }, []);

  return (
    <>
      <div className="banner">
        <img src="https://static.posters.cz/image/hp/66133.jpg" alt="" />
        
      </div>

      <div className='loader'>
          {location ? <Location location={location} /> : <Loader />}

      
          {location ? <ResidentList residents={location.residents} /> : <p>Buscando vida</p>}
      </div>
    </>
  ); 
}

export default App;
