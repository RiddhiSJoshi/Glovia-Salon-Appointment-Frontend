import axios from "axios";

const api_client = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "http://127.0.0.1:8000/api/v1",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

api_client.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api_client.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
    }

    return Promise.reject(error);
  }
);

export default api_client;