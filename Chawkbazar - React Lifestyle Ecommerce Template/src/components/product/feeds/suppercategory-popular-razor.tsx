// razor 4
import { LIMITS } from '@framework/utils/limits-razor';
import SupperCategoryList from "@components/suppercategory/suppercategory-popular-list-razor";
import SupperCategoryContainer from "@components/suppercategory/suppercategory-popular-container-razor";
import {useElectronicProductsQuery} from "@framework/product/get-all-electronic-products-razor";
import { useElectronicCategoryQuery } from '@framework/product/get-electronic-category-razor';
import {useRouter} from "next/router";
import {getDirection} from "@utils/get-direction";
import SectionHeader from "@components/common/section-header";
import BannerGrid from "@components/common/banner-grid-razor";
import {homeFivePopularCategories as bannerHeroCategoies} from "@framework/static/banner-razor";

interface CategoriesProps {
  className?: string;
  rowCarousel?: number;
  showBanner?: boolean;
}


const SuppercategoryPopular: React.FC<CategoriesProps> = ({className = '',rowCarousel,showBanner}) => {
  const { data: category } = useElectronicCategoryQuery({
    limit: LIMITS.ELECTRONIC_PRODUCTS_LIMITS,
  });
  const { data: products, isLoading, error } = useElectronicProductsQuery({
    limit: LIMITS.ELECTRONIC_PRODUCTS_LIMITS,
  });
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const backgroundThumbnail = dir == 'ltr' ? '/assets/images/collection/cate_1.jpg' : '/assets/images/collection/cate_1_rtl.jpg';

  return (
      <div className={className}>
        <SectionHeader
            sectionHeading="text-popular-category-this-month"
            className="mb-3"
        />
        <div className="xl:flex border border-black/10 rounded bg-white w-full" >
          <div className={`xl:w-[300px] p-5 `}>
            <SupperCategoryList className={`supper-category--list`} data={category} showBanner={showBanner}/>
          </div>

          {showBanner && (
              <BannerGrid
                  data={bannerHeroCategoies}
                  grid={1}
                  className="hidden xl:flex staticBanner--slider py-6"
              />
          )}
          <div className={`${showBanner?'banner-main-content':'popular-main-content'} p-2.5 grow`} >
            <SupperCategoryContainer data ={products} isLoading={isLoading} error={error} rowCarousel={rowCarousel} showBanner={showBanner}/>
          </div>
        </div>
      </div>
  );
}
export default SuppercategoryPopular;