import { useQuery } from "@tanstack/react-query";
import { getGraphData, getMetrics } from "./actions";

const useGetMetricsQuery = () => {
  return useQuery({ queryKey: ["metrics"], queryFn: getMetrics });
};

const useGetGraphDataQuery = () => {
  return useQuery({ queryKey: ["graph"], queryFn: getGraphData });
};
export { useGetMetricsQuery, useGetGraphDataQuery };
