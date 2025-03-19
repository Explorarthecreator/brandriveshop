import { useQuery } from "@tanstack/react-query";
import { getMetrics } from "./actions";

const useGetMetricsQuery = () => {
  return useQuery({ queryKey: ["metrics"], queryFn: getMetrics });
};

export { useGetMetricsQuery };
