import { TextField } from "@mui/material";
import CustomButton from "../components/ui/CustomButton";
import EmailInput from "../components/ui/EmailInput";
import PasswordInput from "../components/ui/PasswordInput";

const Signup = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-6">
      <h4 className="text-3xl font-semibold">Sign Up</h4>
      <form className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-5">
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            variant="outlined"
          />
        </div>

        <EmailInput />
        <PasswordInput />

        <CustomButton className="max-w-28">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
