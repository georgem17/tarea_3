import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";

const ResidentList = ({ residents }) => {
  return (
    <>
    {!residents.length && <p>No hay vida en este universo</p>}

      {Boolean(residents.length) && (
        <ul>
          {residents.map((residentUrl) => (
            <li key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))};
        </ul>
      )}
    </>
  );
};
ResidentList.propTypes = {
  residents: PropTypes.array.isRequired,
};

export default ResidentList;