// razor 2
import { LIMITS } from '@framework/utils/limits-razor';
import ListingTabsList from "@components/product/listingtabs/listingtabs-list-razor";
import ListingTabsContainer from "@components/product/listingtabs/listingtabs-container-razor";
import {useElectronicProductsQuery} from "@framework/product/get-all-electronic-products-razor";
import { useElectronicCategoryQuery } from '@framework/product/get-electronic-category-razor';

export default function ListingTabsElectronicFeed(props: any) {
  const { data: category } = useElectronicCategoryQuery({
    limit: LIMITS.ELECTRONIC_PRODUCTS_LIMITS,
  });
  const { data: data, isLoading, error } = useElectronicProductsQuery({
    limit: LIMITS.ELECTRONIC_PRODUCTS_LIMITS,
  });
  const {colSiderbar} = props;

  return (
      <div className="mb-8">
        <div className="listing-tabs">
          <ListingTabsList className={`ltabs-heading`} data={category}/>
          <ListingTabsContainer data={data} isLoading={isLoading} error={error} colSiderbar={colSiderbar}/>
        </div>
      </div>
  );
}
