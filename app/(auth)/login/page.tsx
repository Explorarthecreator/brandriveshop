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
      {/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={keepLoggedIn}
            onChange={(e) => setKeepLoggedIn(e.target.checked)}
          />
          Keep me logged in
        </label>
        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>
        {error && <p>{error.message}</p>}
      </form> */}
    </div>
  );
}
