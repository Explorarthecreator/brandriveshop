"use client";

import MetricSection from "@/components/dashboard/MetricSection";
// import { useQuery } from "@tanstack/react-query";

// const fetchDashboardData = async () => {
//   const response = await fetch("/api/dashboard");
//   if (!response.ok) throw new Error("Failed to fetch dashboard data");
//   return response.json();
// };

export default function Dashboard() {
  // const { data, error, isPending } = useQuery({
  //   queryKey: ["dashboard"],
  //   queryFn: fetchDashboardData,
  // });

  // if (isPending) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  return (
    <div>
      <MetricSection />
    </div>
  );
}
