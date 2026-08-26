import axios from "axios";

// Base URL of backend
const API = axios.create({ baseURL: "http://localhost:3000/api" });
export const fetchProducts = () => API.get("/product");

