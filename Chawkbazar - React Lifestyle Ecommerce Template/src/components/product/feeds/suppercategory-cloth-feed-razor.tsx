import { LIMITS } from '@framework/utils/limits-razor';
import SupperCategoryList from "@components/suppercategory/suppercategory-list-razor";
import SupperCategoryContainer from "@components/suppercategory/suppercategory-container-razor";
import {useClothCategoryQuery} from "@framework/product/get-cloth-category-razor";
import {usefashionProductsQuery} from "@framework/product/get-all-fashion-products-razor";
import {useRouter} from "next/router";
import {getDirection} from "@utils/get-direction";

export default function SupperCategoryElectronicFeed() {
  const { data: category } = useClothCategoryQuery({
    limit: LIMITS.FASHION_PRODUCTS_LIMITS,
  });
  const { data: newdemo, isLoading, error } = usefashionProductsQuery({
    limit: LIMITS.FASHION_PRODUCTS_LIMITS,
  });
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const backgroundThumbnail = dir === 'ltr' ? '/assets-razor/images/collection/cate_2.jpg' : '/assets/images/collection/cate_2_rtl.jpg';

  return (
      <div className="mb-8 lg:mb-12">
        <div className="xl:flex border border-black/10" >
          <div className={`xl:w-[420px] p-7 bg-no-repeat  ${dir == 'rtl' ? 'bg-left': 'bg-right'}`}
               style={{backgroundImage: `url(${backgroundThumbnail})`}}
          >
            <SupperCategoryList className={`supper-category--list`} data={category}/>
          </div>
          <div className="trendy-main-content w-full p-2.5">
            <SupperCategoryContainer data ={newdemo} isLoading={isLoading} error={error}/>
          </div>
        </div>
      </div>
  );
}
