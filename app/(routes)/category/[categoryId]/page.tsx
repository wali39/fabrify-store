import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResult from "@/components/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });
  const category = await getCategory(params.categoryId);
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div>
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter name="Sizes" data={sizes} valueKey="sizeId" />
              <Filter name="Colors" data={colors} valueKey="colorId" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length == 0 && <NoResult />}
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4">
                {products.map((product) => (
                  <ProductCard data={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
