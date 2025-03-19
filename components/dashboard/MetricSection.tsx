import MetricsCard from "./MetricsCard";
import React from "react";

const MetricSection = () => {
  return (
    <section className="flex overflow-x-auto gap-5 pb-4">
      <MetricsCard />
      <MetricsCard />

      <MetricsCard />

      <MetricsCard />
    </section>
  );
};

export default MetricSection;
