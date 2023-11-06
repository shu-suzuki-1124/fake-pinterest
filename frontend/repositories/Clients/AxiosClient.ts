import axios from "axios";

const baseDomain = "https://localhost:1337";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  }
});