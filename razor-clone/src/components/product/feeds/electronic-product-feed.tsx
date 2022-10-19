import {useElectronicProductsQuery} from "../../../framework/basic-rest/product/get-all-electronic-products";
import ProductsCarousel from '../../product/products-carousel';
import { ROUTES } from '../../../utils/routes';
import { LIMITS } from '../../../framework/basic-rest/utils/limits';

export default function ElectronicProductFeed() {
  const { data, isLoading, error } = useElectronicProductsQuery({
    limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
  });
  return (
    <ProductsCarousel
      sectionHeading="text-popcorn-jerky"
      categorySlug={ROUTES.PRODUCTS}
      products={data}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.ELETRONIC_PRODUCTS_LIMITS}
      uniqueKey="popcorn-jerky"
    />
  );
}
