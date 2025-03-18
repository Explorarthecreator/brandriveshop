"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const loginUser = async (data: {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Login failed");
  return response.json();
};

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password, keepLoggedIn });
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}
