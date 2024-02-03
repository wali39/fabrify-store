"use client";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: number | string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div>{formatter.format(Number(value))}</div>;
};

export default Currency;
