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

export interface NoteData {
  title: FormField;
  details: FormField;
  category: FormField;
}

export interface Note {
  _id: string;
  title: string;
  details: string;
  category: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export type SnackbarState = {
  message: string;
  open: boolean;
  severity: "success" | "error" | "info" | "warning";
  showSnackbar: (message: string, severity?: SnackbarState["severity"]) => void;
  closeSnackbar: () => void;
};

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
  logout: () => void;
}
