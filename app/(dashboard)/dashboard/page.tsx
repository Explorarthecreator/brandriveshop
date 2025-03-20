import GraphSection from "@/components/dashboard/GraphSection";
import MetricSection from "@/components/dashboard/MetricSection";
import SalesTable from "@/components/dashboard/SalesTable";

export default function Dashboard() {
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
