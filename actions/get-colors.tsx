import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  return res.json();
};
export default getColors;
