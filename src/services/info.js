import axios from "axios";

const getInfo = () => {
  const request = axios.get(
    "https://api.lanyard.rest/v1/users/603270966960848897" // Replace with your Discord ID, or just see what I'm listening to lmao
  );
  return request.then((response) => response.data);
};

export default { getInfo };
