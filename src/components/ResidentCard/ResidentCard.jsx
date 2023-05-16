import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacterByUrl } from "../../services/getCharacterByUrl";
import "./Resident.css";

const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const loadResident = async () => {
      const residentData = await getCharacterByUrl(url);
      setResident(residentData);
    };

    loadResident();
  }, [url]);

  return (
    <>
      {!resident ? (<p>Buscando ....</p>) : (
        
    <article>
      <div className="img_descrip">
        <img src={resident.image} alt={resident.name} />
      </div>

      <div className="descrip">
        <h3>{resident.name}</h3>
      <ul>
        <li>
          <b>Specie: </b>
          {resident.species}
        </li>
        <li>
          <b>Origin: </b>
          {resident.origin.name}
        </li>
        <li>
          <b>Status: </b>
          {resident.status}
        </li>
        <li>
          <b>Appearances: </b>
          {resident.episode.length}
        </li>
      </ul>   
      </div>
      
    </article>
      )}    
    </>
  );
};

ResidentCard.propTypes = {
  url: PropTypes.string.isRequired
};

export default ResidentCard;