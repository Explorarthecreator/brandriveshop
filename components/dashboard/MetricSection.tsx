"use client";
import { useGetMetricsQuery } from "@/app/(dashboard)/dashboard/mutations";
import React from "react";
import { KyberNetwork, Profile2User, StatusUp } from "iconsax-react";
import { Skeleton } from "../ui/skeleton";
import { formattedMoney } from "@/types/functions";

const MetricSection = () => {
  const { data, isLoading } = useGetMetricsQuery();

  return (
    <section className="flex overflow-x-auto gap-5 pb-4 ">
      <div className="w-[19.56rem] h-[9.75rem]  border border-gray-200 rounded-md overflow-hidden shrink-0 bg-card">
        <div className="h-[6.25rem] p-5">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Total Users</h1>
            <div className="h-8 w-8 rounded-[0.375rem] bg-accent flex items-center justify-center">
              <Profile2User variant="Bold" size={16} className="fill-primary" />
            </div>
          </div>
        </div>
        <div className="h-[3.5rem] flex items-center justify-between px-5 bg-primary-foreground border-t border-gray-200">
          {isLoading ? (
            <Skeleton className="w-[37px] h-[37px]" />
          ) : (
            <>
              <h1 className="font-semibold text-xl">{data?.totalUsers}</h1>
            </>
          )}
        </div>
      </div>

      <div className="w-[19.56rem] h-[9.75rem]  border border-gray-200 rounded-md overflow-hidden shrink-0 bg-card">
        <div className="h-[6.25rem] p-5">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Active Sessions</h1>
            <div className="h-8 w-8 rounded-[0.375rem] bg-primary-foreground flex items-center justify-center">
              <KyberNetwork variant="Bold" size={16} className="fill-primary" />
            </div>
          </div>
        </div>
        <div className="h-[3.5rem] flex items-center justify-between px-5 bg-primary-foreground border-t border-gray-200">
          {isLoading ? (
            <Skeleton className="w-[37px] h-[37px]" />
          ) : (
            <>
              <h1 className="font-semibold text-xl">{data?.activeSessions}</h1>
            </>
          )}
        </div>
      </div>

      <div className="w-[19.56rem] h-[9.75rem]  border border-gray-200 rounded-md overflow-hidden shrink-0 bg-card">
        <div className="h-[6.25rem] p-5">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Sales Revenue</h1>
            <div className="h-8 w-8 rounded-[0.375rem] bg-primary-foreground flex items-center justify-center">
              <StatusUp variant="Bold" size={16} className="fill-primary" />
            </div>
          </div>
        </div>
        <div className="h-[3.5rem] flex items-center justify-between px-5 bg-primary-foreground border-t border-gray-200">
          {isLoading ? (
            <Skeleton className="w-[37px] h-[37px]" />
          ) : (
            <>
              <h1 className="font-semibold text-xl">
                {formattedMoney(
                  data?.salesRevenue.currency || "",
                  data?.salesRevenue.value || 0
                )}
              </h1>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MetricSection;
