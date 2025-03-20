"use client";
import { useGetGraphDataQuery } from "@/app/(dashboard)/dashboard/mutations";
import { CategoryChart } from "./CategoryChart";
import { SalesTrend } from "./SalesTrend";
import { UserGrowth } from "./UserGrowth";

const GraphSection = () => {
  const { data, isLoading } = useGetGraphDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CategoryChart data={data?.categoryDistribution || []} />
      <SalesTrend data={data?.salesTrend || []} />
      <UserGrowth data={data?.userGrowth || []} />
    </div>
  );
};

export default GraphSection;
