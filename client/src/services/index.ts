import axios from "axios";
import type { FormData, LoginData, NoteData } from "../types/index";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
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
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
  }
};

export const createNote = async (data: NoteData) => {
  try {
    const payload = {
      title: data?.title?.value,
      details: data?.details?.value,
      category: data?.category?.value,
    };
    const response = await api.post("/createNote", payload);
    return response?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
  }
};

export const getNotes = async () => {
  try {
    const response = await api.get("/getNotes");
    return response.data.notes;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
  }
};

export const deleteNoteByID = async (id: string) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    return response?.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
  }
};
