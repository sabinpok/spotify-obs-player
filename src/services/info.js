import axios from "axios";

const getInfo = (info) => {
  return axios
    .get("https://api.lanyard.rest/v1/users/" + info)
    .then((response) => response.data);
};

export default { getInfo };
