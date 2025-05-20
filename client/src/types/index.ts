export interface FormField {
  value: string;
  error: string | null;
}
export interface FormData {
  firstName: FormField;
  lastName: FormField;
  email: FormField;
  password: FormField;
}

export interface LoginData {
  email: FormField;
  password: FormField;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
}
