export const login = async (data: {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    // Parse the error message from the response
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed"); // Throw an error with the message
  }

  return response.json();
};

export const signup = async (data: {
  email: string;
  password: string;
  //   name: string;
}) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    // Parse the error message from the response
    const errorData = await response.json();
    throw new Error(errorData.message || "Signup failed"); // Throw an error with the message
  }

  return response.json();
};
