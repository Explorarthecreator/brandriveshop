"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const fetchDashboardData = async () => {
  const response = await fetch("/api/dashboard");
  if (!response.ok) throw new Error("Failed to fetch dashboard data");
  return response.json();
};

export default function Dashboard() {
  const router = useRouter();
  const { data, error, isPending } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data.message}</p>
      <button onClick={() => router.push("/logout")}>Logout</button>
    </div>
  );
}
