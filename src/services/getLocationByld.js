import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";

export const getLocationByld = async (locationId) => {
  try {
    const res = await axios.get(`${baseUrl}/location/${locationId}`);

    return res.data;
  } catch(error){
    console.error(error);
  }
};