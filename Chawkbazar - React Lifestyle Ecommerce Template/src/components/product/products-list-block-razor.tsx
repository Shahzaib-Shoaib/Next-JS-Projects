// razor 2
import SectionHeader from '@components/common/section-header-razor';
import ProductList from '@components/product/product-cards/product-list-razor';
import ProductCardLoader from '@components/ui/loaders/product-card-loader-razor';
import {Product} from '@framework/types';
import Alert from '@components/ui/alert';
import Carousel from "@components/ui/carousel/carousel-razor";
import {SwiperSlide} from "@components/ui/carousel/slider-razor";
//import SeeAll from "@components/ui/see-all";
import {getDirection} from "@utils/get-direction";
import {useWindowSize} from "@utils/use-window-size";
import {useRouter} from "next/router";

interface ProductsProps {
    sectionHeading: string;
    className?: string;
    products?: Product[];
    loading: boolean;
    error?: string;
    limit?: number;
    uniqueKey?: string;
}

const breakpoints = {
    '1024': {
        slidesPerView: 1,
    },
    '640': {
        slidesPerView: 1,
    },
    '0': {
        slidesPerView: 1,
    },
};
const ProductsListBlock: React.FC<ProductsProps> = ({
    sectionHeading,
    className = 'mb-8',
    products,
    loading,
    error,
    limit,
    uniqueKey,
     }) => {
    const {width} = useWindowSize();
    const {locale} = useRouter();
    const dir = getDirection(locale);

    return (
        <div className={`${className}`}>
            {
                sectionHeading && (
                    <div className=" mb-5 md:mb-6">
                        <SectionHeader sectionHeading={sectionHeading} className="mb-0 block-title"/>
                    </div>
                )
            }
            {error ? (
                <div className="2xl:pe-10">
                    <Alert message={error}/>
                </div>
            ) : (
                <div className="heightFull relative extraslider--sidebar">
                    <Carousel
                        breakpoints={breakpoints}
                        grid={{rows: 3, fill: 'row'}}
                        className=" "
                        buttonGroupClassName="-top-11 sm:-top-11"
                        prevButtonClassName="end-8 -translate-y-2 "
                        nextButtonClassName="end-0 -translate-y-2"

                    >
                        {loading && !products?.length ? (
                            Array.from({length: limit!}).map((_, idx) => (
                                <SwiperSlide
                                    key={`${uniqueKey}-${idx}`}
                                    className="py-1.5 md:py-2 xl:py-2.5"
                                >
                                    <ProductCardLoader uniqueKey={`${uniqueKey}-${idx}`}/>
                                </SwiperSlide>
                            ))
                        ) : (
                            <>
                                {products?.slice(0, limit).map((product: any, idx) => (
                                    <SwiperSlide
                                        key={`${uniqueKey}-${idx}`}
                                        className="py-1.5 "
                                    >
                                        <ProductList product={product}/>
                                    </SwiperSlide>
                                ))}

                            </>
                        )}
                    </Carousel>
                </div>
            )}

        </div>
    );
};

export default ProductsListBlock;
