// razor 4
import LatestblogCard from '@components/cards/latestblog-card-razor';
import SectionHeader from '@components/common/section-header-razor';
import Carousel from '@components/ui/carousel/carousel-razor';
import {SwiperSlide} from '@components/ui/carousel/slider-razor';
import {ROUTES} from '@utils/routes';
import {useBlogsQuery} from "@framework/blog/get-all-blogs-RAZOR";

interface Props {
    className?: string;
    headingPosition?: 'left' | 'center';
}

const breakpoints = {
    '1536': {
        slidesPerView: 5,
    },
    '1280': {
        slidesPerView: 4,
    },
    '1024': {
        slidesPerView: 3,
    },
    '768': {
        slidesPerView: 2,
    },
    '540': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 1,
    },
};

const LatestblogCarousel: React.FC<Props> = ({
             className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
             headingPosition = 'left',
    }) => {
    const {data, isLoading, error} = useBlogsQuery({});
    const dataBlog = data?.blogs?.data;

    return (
        <div className={className}>

            <SectionHeader sectionHeading="text-latestblog" className="mb-3"/>
            <Carousel
                breakpoints={breakpoints}
                autoplay={false}
                navigation={true}
                className="rounded border border-black/10 bg-white px-2 lg:px-3"
                prevActivateId="latestblog-carousel-button-prev"
                nextActivateId="latestblog-carousel-button-next"
            >
                {dataBlog?.map((item) => (
                    <SwiperSlide
                        key={`collection-key-${item.id}`}
                        className="px-1.5 md:px-2 xl:px-3 py-5"
                    >
                        <LatestblogCard
                            key={item.id}
                            collection={item}
                            href={`${ROUTES.BUNDLE}/${item.slug}`}
                        />
                    </SwiperSlide>
                ))}
            </Carousel>

        </div>
    );
};

export default LatestblogCarousel;