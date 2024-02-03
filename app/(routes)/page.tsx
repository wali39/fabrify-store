import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import ProductList from "@/components/ui/product-list";

import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const billboard = await getBillboard("67b956e2-7120-41c3-9802-0e1d77a44b56");
  const products = await getProducts({ isFeatured: true });
  // console.log(products);
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
