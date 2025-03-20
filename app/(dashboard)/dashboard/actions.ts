import { GraphData, MetricsResponse, SalesData } from "@/types";

export const getMetrics = async (): Promise<MetricsResponse> => {
  const response = await fetch("/api/metrics");
  if (!response.ok) throw new Error("Failed to fetch metrics data");
  return response.json();
};

export const getGraphData = async (): Promise<GraphData> => {
  const response = await fetch("/api/graph");
  if (!response.ok) throw new Error("Failed to fetch graph data");
  return response.json();
};

export const getSalesData = async (): Promise<SalesData[]> => {
  const response = await fetch("/api/sales");
  if (!response.ok) throw new Error("Failed to fetch sales data");
  return response.json();
};
