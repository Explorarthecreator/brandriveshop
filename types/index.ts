export interface MetricsResponse {
  totalUsers: number;
  activeSessions: number;
  salesRevenue: {
    currency: string;
    value: number;
  };
}

export interface CategoryDistribution {
  category: string;
  visitors: number;
  fill: string;
}

export interface SalesTrend {
  month: string;
  naira: number;
  usd: number;
}

export interface UserGrowth {
  month: string;
  users: number;
}

export interface GraphData {
  salesTrend: SalesTrend[];
  userGrowth: UserGrowth[];
  categoryDistribution: CategoryDistribution[];
}

export interface SalesData {
  itemName: string;
  status: "successful" | "pending" | "failed";
  price: {
    currency: string;
    amount: number;
  };
  category: string;
}

export interface SalesResponse {
  data: SalesData[];
}
