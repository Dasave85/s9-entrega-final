import axios from "axios";

export const burgerApi = axios.create({
  headers: {
    "X-RapidAPI-Key": "8cc50321c3msh703092f29baa2f3p1638a1jsn64d14057b969",
    "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
  },
});
