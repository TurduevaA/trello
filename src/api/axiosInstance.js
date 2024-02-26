import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://f44b5dfc745a0951.mokky.dev",
  timeout: 8000,
  headers: { Accept: "application/json" },
});
