"use client";

import { Badge } from "@/components/ui/badge";
import { SalesData } from "@/types";
import { formattedMoney } from "@/types/functions";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<SalesData>[] = [
  {
    accessorKey: "itemName",
    header: "Item Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const { price } = row.original;

      return <div>{formattedMoney(price.currency, price.amount)}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const { category } = row.original;
      return <span className=" capitalize">{category}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <Badge
          className={`py-2 px-6 rounded-[6px]  text-xs font-bold capitalize ${
            status === "successful" && "bg-[#E3FFF1] border-none text-[#05a660]"
          } ${
            status === "pending" && "bg-[#FFFBDE ] border-none text-[#E5B800]"
          } ${
            status === "failed" && "bg-[#ffdcdc] border-none text-[#e53535]"
          } `}
          variant={"outline"}
        >
          <span>{status}</span>
        </Badge>
      );
    },
  },
];
