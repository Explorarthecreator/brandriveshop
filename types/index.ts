export interface MetricsResponse {
  totalUsers: number;
  activeSessions: number;
  salesRevenue: {
    currency: string;
    value: number;
  };
}
