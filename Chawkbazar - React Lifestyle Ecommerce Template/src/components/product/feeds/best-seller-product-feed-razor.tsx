// razor
import ProductsCarousel from '@components/product/products-carousel-razor';
import { useBestSellerProductsQuery } from '@framework/product/get-all-best-seller-products';
import { LIMITS } from '@framework/utils/limits-razor';
import { ROUTES } from '@utils/routes';

export default function BestSellerProductFeed() {
  const { data, isLoading, error } = useBestSellerProductsQuery({
    limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
    id: 1,
  });
  return (
    <ProductsCarousel
      sectionHeading="text-best-sellers"
      categorySlug={ROUTES.PRODUCT}
      products={data}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
      uniqueKey="best-sellers"
      className = "mb-8"
    />
  );
}
