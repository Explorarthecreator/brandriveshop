export const login = async (data: {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include", // Include cookies in the request
  });

  if (!response.ok) {
    // Parse the error message from the response
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed"); // Throw an error with the message
  }

  return response.json();
};
