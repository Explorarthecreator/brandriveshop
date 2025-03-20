"use client";
import GraphSection from "@/components/dashboard/GraphSection";
import MetricSection from "@/components/dashboard/MetricSection";
import SalesTable from "@/components/dashboard/SalesTable";
import { useAutoLogout } from "@/hook/autoLogout";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  useAutoLogout(60000, handleLogout);
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-secondary-foreground ">Hello!</p>
        <h1 className=" text-2xl lg:text-5xl text-primary">
          Welcome to Brandrive!
        </h1>
      </div>
      <MetricSection />
      <GraphSection />

      <SalesTable />
    </div>
  );
}
