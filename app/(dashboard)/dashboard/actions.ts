import { MetricsResponse } from "@/types";

export const getMetrics = async (): Promise<MetricsResponse> => {
  const response = await fetch("/api/metrics");
  if (!response.ok) throw new Error("Failed to fetch metrics data");
  return response.json();
};
