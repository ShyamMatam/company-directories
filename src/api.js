import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchCompanies = async () => {
  return await api.get("/companies-list");
};

export default api;
