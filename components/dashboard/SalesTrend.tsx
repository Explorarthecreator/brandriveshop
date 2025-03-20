"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { SalesTrend } from "@/types";

export function SalesTrend({ data }: { data: SalesTrend[] }) {
  const chartData = data;

  const chartConfig = {
    naira: {
      label: "Naira",
      color: "hsl(var(--chart-3))",
    },
    usd: {
      label: "Usd",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Trend- Naira vs Dollar</CardTitle>
        <CardDescription>October 2024 - March 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="naira"
              type="natural"
              stroke="var(--color-naira)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-naira)",
              }}
              activeDot={{
                r: 6,
              }}
            />

            <Line
              dataKey="usd"
              type="natural"
              stroke="var(--color-usd)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-usd)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
