// 4
import SectionHeader from '@components/common/section-header-razor';
import ProductCard from '@components/product/product-cards/product-card-v2-razor';
import { Product } from '@framework/types';
import Carousel from '@components/ui/carousel/carousel-razor';
import { SwiperSlide } from '@components/ui/carousel/slider-razor';
import Alert from '@components/ui/alert';
import SeeAll from '@components/ui/see-all-razor';
import {useWindowSize} from '@utils/use-window-size';
import ProductCardLoader from '@components/ui/loaders/product-card-loader-razor';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { getDirection } from '@utils/get-direction';

interface ProductsCarouselProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  products?: Product[];
  loading: boolean;
  error?: string;
  limit?: number;
  uniqueKey?: string;
  borderCarousel?: boolean;
  carouselBreakpoint?: {} | any;
  rowCarousel?: number;
}

const breakpoints = {
  '1536': {
    slidesPerView: 6,
  },
  '1280': {
    slidesPerView: 5,
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

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  sectionHeading,
  categorySlug,
  className = '',
  products,
  loading,
  error,
  limit,
  uniqueKey,
  borderCarousel,
   carouselBreakpoint,
   rowCarousel= 1,
}) => {
  const { width } = useWindowSize();
  const { locale } = useRouter();
  const dir = getDirection(locale);
  return (
    <div
      className={cn(
        'relative',
        className
      )}
    >
      {
        sectionHeading && (
              <SectionHeader sectionHeading={sectionHeading} className="mb-3" />
          )
      }

      {error ? (
        <div className="2xl:pe-10">
          <Alert message={error} />
        </div>
      ) : (
        <div className={`heightFull relative ${borderCarousel != undefined ? 'p-3 border border-black/10 rounded bg-white' : ''} `}>
          <Carousel
              grid={{rows: rowCarousel, fill: 'row'}}
              breakpoints={carouselBreakpoint ? carouselBreakpoint : breakpoints}
            prevButtonClassName="start-5  -top-12 3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
            nextButtonClassName={`end-5 -top-12 3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 ${
              dir === 'rtl' ? 'xl:-translate-x-2.5' : 'xl:translate-x-2.5'
            }`}
          >
            {loading && !products?.length ? (
              Array.from({ length: limit! }).map((_, idx) => (
                <SwiperSlide
                  key={`${uniqueKey}-${idx}`}
                  className="px-1.5 md:px-2 xl:px-2.5"
                >
                  <ProductCardLoader uniqueKey={`${uniqueKey}-${idx}`} />
                </SwiperSlide>
              ))
            ) : (
              <>
                {products?.map((product: any, idx) => (
                  <SwiperSlide
                    key={`${uniqueKey}-${idx}`}
                    className="px-1.5 md:px-2 xl:px-2.5"
                  >
                    <ProductCard product={product} />
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

export default ProductsCarousel;
