import axios from "axios";

const ApiMarvel = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  timeout: 5000
});

export default ApiMarvel;