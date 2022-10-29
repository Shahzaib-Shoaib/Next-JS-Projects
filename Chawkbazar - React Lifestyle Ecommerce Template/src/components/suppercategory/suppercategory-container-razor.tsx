import {ROUTES} from '@utils/routes';
import {LIMITS} from "@framework/utils/limits-razor";
import ProductsCarousel from '../product/products-carousel-razor';
//import {useFreshVegetablesProductsQuery} from "@framework/product/get-all-fresh-vegetables-products";
//import {Category} from "@framework/types";
//import {LinkProps} from "next/link";
//import SupperCategoryList from "@components/suppercategory/suppercategory-list";

interface Props {
    data: any;
    isLoading: any;
    error?: any;
}
const SupperCategoryContainer: React.FC<Props> = ({data, isLoading, error}) => {

    const breakpoints = {

        '1536': {
            slidesPerView: 5,
        },
        '1280': {
            slidesPerView: 4,
        },
        '1024': {
            slidesPerView: 4,
        },
        '640': {
            slidesPerView: 3,
        },
        '360': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    };
    return (
        <ProductsCarousel
            sectionHeading=""
            categorySlug={ROUTES.PRODUCTS}
            products={data}
            loading={isLoading}
            error={error?.message}
            limit={LIMITS.FASHION_PRODUCTS_LIMITS}
            uniqueKey="fresh-vegetable"
            carouselBreakpoint={breakpoints}
        />
    );
};
export default SupperCategoryContainer;
