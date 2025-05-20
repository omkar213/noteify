import { TextField } from "@mui/material";
import CustomButton from "../components/ui/CustomButton";
import EmailInput from "../components/ui/EmailInput";
import PasswordInput from "../components/ui/PasswordInput";
import { useState } from "react";
import { signup } from "../services/index";

import { useAuthStore } from "../store/store";

import type { FormData } from "../types/index";
import { useNavigate } from "react-router-dom";

const defaultFormState: FormData = {
  firstName: { value: "", error: null },
  lastName: { value: "", error: null },
  email: { value: "", error: null },
  password: { value: "", error: null },
};

const Signup = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const navigate = useNavigate();

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

    const { firstName, lastName, email, password } = updatedState;

    if (!firstName?.value.trim()) {
      updatedState.firstName.error = "First name is required";
      error = true;
    }

    if (!lastName.value.trim()) {
      updatedState.lastName.error = "Last name is required";
      error = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      updatedState.email.error = "Email is required";
      error = true;
    } else if (!emailRegex.test(email.value)) {
      updatedState.email.error = "Invalid email format";
      error = true;
    }

    if (!password.value.trim()) {
      updatedState.password.error = "Password is required";
      error = true;
    } else if (password.value.length < 6) {
      updatedState.password.error = "Password must be at least 6 characters";
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
        const res = await signup(formData);
        if (res?.jwtToken && res?.user) {
          localStorage.setItem("token", res.jwtToken);
          useAuthStore.getState().setUser(res.user);
          navigate("/mynotes");
        }
        setFormData(defaultFormState);
      } catch (err) {
        console.error("Signup failed:", err);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 md:gap-6">
      <h4 className="text-3xl font-semibold">Sign Up</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-5">
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            variant="outlined"
            value={formData.firstName.value}
            onChange={handleChange}
            error={!!formData?.firstName?.error}
            helperText={formData.firstName.error ?? ""}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={formData.lastName.value}
            onChange={handleChange}
            error={!!formData?.lastName?.error}
            helperText={formData.lastName.error ?? ""}
          />
        </div>

        <EmailInput
          name="email"
          value={formData.email.value}
          onChange={handleChange}
          error={!!formData.email.error}
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

        <CustomButton type="submit" className="max-w-28">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default Signup;
