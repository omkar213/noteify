import CustomButton from "../components/ui/CustomButton";
import EmailInput from "../components/ui/EmailInput";
import PasswordInput from "../components/ui/PasswordInput";

const Login = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-6">
      <h4 className="text-3xl font-semibold">Login</h4>
      <form className="flex flex-col gap-5 md:gap-6">
        <EmailInput />
        <PasswordInput />
        <CustomButton className="max-w-16">Login</CustomButton>
      </form>
    </div>
  );
};

export default Login;
