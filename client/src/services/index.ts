import axios from "axios";
import type { FormData, LoginData } from "../types/index";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = async (data: FormData) => {
  try {
    const payload = {
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      email: data.email.value,
      password: data.password.value,
    };
    const response = await api.post("/signup", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: LoginData) => {
  try {
    const payload = {
      email: data?.email?.value,
      password: data?.password?.value,
    };
    const response = await api.post("/login", payload);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
