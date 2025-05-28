import { create } from "zustand";
import type { AuthState, SnackbarState } from "../types";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export const useSnackbarStore = create<SnackbarState>((set) => ({
  message: "",
  open: false,
  severity: "info",
  showSnackbar: (message, severity = "info") =>
    set({ message, severity, open: true }),
  closeSnackbar: () => set({ open: false }),
}));
