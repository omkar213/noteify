import { useState } from "react";
import CustomButton from "../components/ui/CustomButton";
import EmailInput from "../components/ui/EmailInput";
import PasswordInput from "../components/ui/PasswordInput";

import type { LoginData } from "../types/index";
import { login } from "../services";
import { useAuthStore, useSnackbarStore } from "../store/store";

import { useNavigate } from "react-router-dom";

const defaultFormState: LoginData = {
  email: { value: "", error: null },
  password: { value: "", error: null },
};

const Login = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const navigate = useNavigate();

  const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        error: null,
      },
    }));
  };

  const handleValidation = () => {
    const updatedState = { ...formData };
    let error = false;

    const { email, password } = updatedState;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      updatedState.email.error = "Email is Required";
      error = true;
    } else if (!emailRegex.test(email.value)) {
      updatedState.email.error = "Invalid Email Format";
      error = true;
    }

    if (!password.value.trim()) {
      updatedState.password.error = "Password is required";
      error = true;
    } else if (password.value.length < 6) {
      updatedState.password.error =
        "Password should not be less than 6 characters";
      error = true;
    }

    setFormData(updatedState);
    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = handleValidation();

    if (!hasErrors) {
      try {
        const response = await login(formData);
        if (response?.token && response?.user) {
          localStorage.setItem("token", response.token);
          useAuthStore.getState().setUser(response.user);
          showSnackbar(response?.message || "Logged In", "success");
          navigate("/mynotes");
        }
      } catch (error: any) {
        const errorMessage = error?.message || "Failed to Sign Up";
        showSnackbar(errorMessage, "error");
      }
    }
  };
  return (
    <div className="w-full flex flex-col gap-5 md:gap-6">
      <h4 className="text-3xl font-semibold">Login</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
        <EmailInput
          name="email"
          value={formData.email.value}
          error={!!formData.email.error}
          onChange={handleChange}
          helperText={formData.email.error ?? ""}
        />
        <PasswordInput
          name="password"
          type="password"
          value={formData.password.value}
          onChange={handleChange}
          error={!!formData.password.error}
          helperText={formData.password.error ?? ""}
        />
        <CustomButton type="submit" className="max-w-16">
          Login
        </CustomButton>
      </form>
    </div>
  );
};

export default Login;
