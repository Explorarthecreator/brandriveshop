type User = {
  email: string;
  password: string;
  name: string;
};

// In-memory storage for users (replace with a database in production)
export const users: User[] = [
  {
    email: "good@gmail.com",
    password: "password",
    name: "Good",
  },
];

export const getUsers = () => users;
export const addUser = (user: User) => users.push(user);
