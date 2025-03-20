"use client";

import { columns } from "@/app/(dashboard)/dashboard/columns";
import { useGetSalesDataQuery } from "@/app/(dashboard)/dashboard/mutations";
import { OverviewSalesTable } from "@/app/(dashboard)/dashboard/overviewTable";

const SalesTable = () => {
  const { data, isLoading, isSuccess } = useGetSalesDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    console.log(data);
  }

  return (
    <div>
      <OverviewSalesTable
        columns={columns}
        loading={isLoading}
        data={data || []}
      />
    </div>
  );
};

export default SalesTable;
