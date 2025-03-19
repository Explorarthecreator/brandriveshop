import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <div className="space-y-9 lg:space-y-14  w-11/12 max-w-[400px] m-auto">
      <div className="space-y-2 lg:space-y-4">
        <h1 className="font-bold text-2xl lg:text-5xl">Welcome back!</h1>
        <p className="text-sm lg:text-base">
          Enter your credentials to access your account.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
