// razor
import SectionHeader from '@components/common/section-header-razor';
import ProductCard from './product-cards/product-card-razor';
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
  carouselBreakpoint?: {} | any;
}

const breakpoints = {
  '1921': {
    slidesPerView: 7,
  },
  '1780': {
    slidesPerView: 7,
  },
  '1536': {
    slidesPerView: 7,
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
  carouselBreakpoint,
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
            <div className=" mb-5 md:mb-6">
              <SectionHeader sectionHeading={sectionHeading} className="mb-0 block-title" />
            </div>
          )
      }

      {error ? (
        <div className="2xl:pe-10">
          <Alert message={error} />
        </div>
        
      ) : (
        <div className="heightFull  4xl:me-0 relative after-item-opacity">
          <Carousel
            breakpoints={carouselBreakpoint ? carouselBreakpoint : breakpoints}
            className=" "
            prevButtonClassName="start-5  -top-12 3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
            nextButtonClassName={`end-5 -top-12 3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 ${
              dir === 'rtl' ? 'xl:-translate-x-2.5' : 'xl:translate-x-2.5'
            }`}
          >
            {loading || !products?.length ? (
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
                <SwiperSlide className="p-2.5 flex items-center justify-center">
                  <SeeAll href={categorySlug} />
                </SwiperSlide>
                {width! > 1024 && width! < 1921 && <SwiperSlide />}
              </>
            )}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;
