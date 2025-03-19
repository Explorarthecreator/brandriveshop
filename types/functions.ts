export function formattedMoney(currency: string, amount: number) {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
  return formattedCurrency;
}
