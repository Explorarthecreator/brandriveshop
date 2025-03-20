import { NextResponse } from "next/server";

const generateSalesTableData = () => {
  const items = [
    { name: "Sedan", category: "cars" },
    { name: "SUV", category: "cars" },
    { name: "Sofa", category: "furnitures" },
    { name: "Dining Table", category: "furnitures" },
    { name: "Action Figure", category: "toys" },
    { name: "LEGO Set", category: "toys" },
    { name: "Notebook", category: "stationary" },
    { name: "Pen Set", category: "stationary" },
  ];
  const currencies = ["USD", "EUR", "GBP", "JPY", "INR"];
  const statuses = ["successful", "pending", "failed"];

  const data = [];

  for (let i = 0; i < 10; i++) {
    const { name: itemName, category } =
      items[Math.floor(Math.random() * items.length)];
    const currency = currencies[Math.floor(Math.random() * currencies.length)];
    const amount = Math.floor(Math.random() * 1000) + 100;
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    data.push({
      itemName,
      category,
      price: { currency, amount },
      status,
    });
  }

  return data;
};

export async function GET() {
  try {
    const salesTableData = generateSalesTableData();
    return NextResponse.json(salesTableData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
