import { NextResponse } from "next/server";
const generateSalesData = () => {
  const months = [
    "October",

    "November",
    "December",
    "January",
    "February",
    "March",
  ];
  const data = [];

  for (let i = 0; i < 6; i++) {
    data.push({
      month: months[i],
      naira: Math.floor(Math.random() * 500000),
      usd: Math.floor(Math.random() * 300000),
    });
  }

  return data;
};

const generateUserGrowthData = () => {
  const months = [
    "October",

    "November",
    "December",
    "January",
    "February",
    "March",
  ];
  const data = [];

  for (let i = 0; i < 6; i++) {
    data.push({
      month: months[i],
      users: Math.floor(Math.random() * 10000),
    });
  }

  return data;
};

const generateCategoryDistributionData = () => {
  const categories = ["cars", "furniture", "toys", "stationary"];
  const data = categories.map((category) => ({
    category,
    visitors: Math.floor(Math.random() * 1000),
    fill: `var(--color-${category})`,
  }));

  return data;
};

export async function GET() {
  try {
    const salesTrendData = generateSalesData();
    const userGrowthData = generateUserGrowthData();
    const categoryDistributionData = generateCategoryDistributionData();

    return NextResponse.json({
      salesTrend: salesTrendData,
      userGrowth: userGrowthData,
      categoryDistribution: categoryDistributionData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
