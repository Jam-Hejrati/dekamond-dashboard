import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    toast.error("Request error occurred");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      toast.error("Unauthorized! Please log in.");
      redirect("/login");
    }
    toast.error("Response error occurred");
    return Promise.reject(error);
  }
);

export default api;
