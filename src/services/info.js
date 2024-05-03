import axios from "axios";

const getInfo = (info) => {
  const request = axios.get("https://api.lanyard.rest/v1/users/" + info);
  return request.then((response) => response.data);
};

export default { getInfo };
