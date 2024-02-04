"use client";

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: number | string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);
  if (!isMount) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
