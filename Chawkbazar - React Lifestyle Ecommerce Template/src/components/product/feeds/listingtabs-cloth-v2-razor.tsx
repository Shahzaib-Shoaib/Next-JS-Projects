// razor 5
import { LIMITS } from '@framework/utils/limits-razor';
import ListingTabsList from "@components/product/listingtabs/listingtabs-list-v2-razor";
import ListingTabsContainer from "@components/product/listingtabs/listingtabs-container-v2-razor";
import { useClothCategoryQuery } from '@framework/product/get-cloth-category-razor';
import {usefashionProductsQuery} from "@framework/product/get-all-fashion-products-razor";


export default function ListingTabsClothFeed(props: any) {
  const { data: category } = useClothCategoryQuery({
    limit: LIMITS.FASHION_PRODUCTS_LIMITS,
  });
  const { data: data, isLoading, error } = usefashionProductsQuery({
    limit: LIMITS.FASHION_PRODUCTS_LIMITS,
  });
  const {showBanner} = props;
  const banner_url = '/assets-razor/images/collection/banner_cate_home7_4.jpg';

  return (
      <div className="mb-8 lg:mb-12">
        <div className="listing-tabs" >
          <ListingTabsList className={`ltabs-heading`} data={category}/>
          <ListingTabsContainer data={data} category={category} isLoading={isLoading} error={error} showBanner={showBanner} banner_url={banner_url}/>
        </div>
      </div>
  );
}
