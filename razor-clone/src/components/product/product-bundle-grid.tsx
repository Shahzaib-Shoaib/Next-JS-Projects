import ProductCard from '../product/product-cards/product-card';
import type { FC } from 'react';
import { useProductsQuery } from '../../framework/basic-rest/product/get-all-products';
import ProductCardLoader from '../ui/loaders/product-card-loader';
import Alert from '../ui/alert';
import cn from 'classnames';
import slice from 'lodash/slice';
import { Product } from '../../framework/basic-rest/types';
interface ProductFeedProps {
  className?: string;
}
const ProductBundleGrid: FC<ProductFeedProps> = ({
  className = '',
}) => {
  const limit = 35;
  const { data, isLoading, error } = useProductsQuery({
    limit: limit,
  });

  return (
    <div className={cn(className)}>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-3 md:gap-4 2xl:gap-5">
          {isLoading && !data?.pages?.length ? (
            Array.from({ length: 30 }).map((_, idx) => (
              <ProductCardLoader
                key={`product--key-${idx}`}
                uniqueKey={`product--key-${idx}`}
              />
            ))
          ) : (
            <>
              {data?.pages?.map((page: any) => {
                return (
                  <>
                    {page?.data?.slice(0, 21)?.map((product: Product) => (
                      <ProductCard
                        key={`product--key${product.id}`}
                        product={product}
                      />
                    ))}
                    {page?.data?.length! > 21 &&
                      slice(page?.data, 21, page?.data?.length).map(
                        (product: any) => (
                          <ProductCard
                            key={`product--key${product.id}`}
                            product={product}
                          />
                        )
                      )}
                  </>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductBundleGrid;
