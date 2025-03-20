import { useQuery } from "@tanstack/react-query";
import { getGraphData, getMetrics, getSalesData } from "./actions";

const useGetMetricsQuery = () => {
  return useQuery({ queryKey: ["metrics"], queryFn: getMetrics });
};

const useGetGraphDataQuery = () => {
  return useQuery({ queryKey: ["graph"], queryFn: getGraphData });
};

const useGetSalesDataQuery = () => {
  return useQuery({ queryKey: ["sales"], queryFn: getSalesData });
};
export { useGetMetricsQuery, useGetGraphDataQuery, useGetSalesDataQuery };
