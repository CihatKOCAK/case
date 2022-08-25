import axios from "axios";

export const getItems = async (url) => {
  return await axios.get(url).then(
    (response) => {
      return response.data;
    }
  );
 
};
