import { Size } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  return res.json();
};
export default getSizes;
