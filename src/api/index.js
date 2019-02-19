import axios from "axios";
import { ACCESS_KEY } from "./.config.js";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});

const searchPhoto = () => unsplash.get("/photos/random");

export { searchPhoto };

export default unsplash;
