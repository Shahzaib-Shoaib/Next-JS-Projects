// 2
import { LIMITS } from '@framework/utils/limits';
import ListingTabsList from "@components/product/listingtabs/listingtabs-list";
import ListingTabsContainer from "@components/product/listingtabs/listingtabs-container";
import { useClothCategoryQuery } from '@framework/product/get-cloth-category';
import {usefashionProductsQuery} from "@framework/product/get-all-fashion-products";


export default function ListingTabsClothFeed(props: any) {
  const { data: category } = useClothCategoryQuery({
    limit: LIMITS.FASHION_PRODUCTS_LIMITS,
  });
  const { data: data, isLoading, error } = usefashionProductsQuery({
    limit: LIMITS.FASHION_PRODUCTS_LIMITS,
  });
  const {colSiderbar} = props;

  return (
      <div className="mb-8">
        <div className="listing-tabs" >
          <ListingTabsList className={`ltabs-heading`} data={category}/>
          <ListingTabsContainer data={data} isLoading={isLoading} error={error} colSiderbar={colSiderbar}/>
        </div>
      </div>
  );
}
