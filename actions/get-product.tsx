
import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${url}/${id}`, {
    next: { revalidate: 0 },
  });
  return res.json();
};
export default getProduct;
