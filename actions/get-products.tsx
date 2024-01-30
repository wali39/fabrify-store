import qs from "query-string";

import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const modofiedUrl = qs.stringifyUrl({
    url: url,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  return res.json();
};
export default getProducts;
