import axios from "axios";

const API_BASE_URL = "http://localhost:3001/company-list";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchCompanies = async () => {
  return await api.get("/companies-list");
};

export default api;
