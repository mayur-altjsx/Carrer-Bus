import axios from "axios";

const API = axios.create({
  baseURL: "https://sih-73ja.onrender.com/api", // adjust if your backend runs on another port
});

// Example: attach token if you later add auth
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

export default API;
