// razor
import LicenseIcon from '@components/icons-razor/featured/license-icon';
import FeedbackIcon from '@components/icons-razor/featured/feedback-icon';
import SyncIcon from '@components/icons-razor/featured/sync-icon';
import RocketIcon from '@components/icons-razor/featured/rocket-icon';
import FeaturedCard from '@components/cards/featured-card-razor';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider-razor';
import ThumbsIcon from '@components/icons-razor/featured/thumbs-icon';
import {ROUTES} from "@utils/routes";

const data = [
    {
        id: 1,
        icon: (
            <RocketIcon
                color="#333"
            />
        ),
        title: 'feature-title-one-razor',
        description: 'feature-title-one-description-razor',
        href: ROUTES.SEARCH,
    },
    {
        id: 2,
        icon: (
            <SyncIcon
                color="#333"
            />
        ),
        title: 'feature-title-two-razor',
        description: 'feature-title-two-description-razor',
        href: ROUTES.SEARCH,
    },
    {
        id: 3,
        icon: (
            <FeedbackIcon
                color="#333"
            />
        ),
        title: 'feature-title-three-razor',
        description: 'feature-title-three-description-razor',
        href: ROUTES.SEARCH,
    },
    {
        id: 4,
        icon: (
            <ThumbsIcon
                color="#333"
            />
        ),
        title: 'feature-title-four-razor',
        description: 'feature-title-four-description-razor',
        href: ROUTES.SEARCH,
    },
    {
        id: 5,
        icon: (
            <LicenseIcon
                color="#333"
            />
        ),
        title: 'feature-title-five-razor',
        description: 'feature-title-five-description-razor',
        href: ROUTES.SEARCH,
    },
];

interface Props {
    className?: string;
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
    '640 ': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 1,
    },
};

const FeatureCarousel: React.FC<Props> = ({
                                              className = 'mb-7 md:mb-10 ',
                                          }) => {
    return (
        <div className={` ${className}`}>
            <Carousel
                autoplay={false}
                breakpoints={breakpoints}
                prevActivateId="featured-carousel-button-prev"
                nextActivateId="featured-carousel-button-next"
                prevButtonClassName="start-5  3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
                nextButtonClassName={`end-5  3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 `}
                className={'rounded-md border border-black/10 py-5 '}
            >
                {data?.map((item) => (
                    <SwiperSlide key={`featured-key-${item.id}`}>
                        <FeaturedCard item={item} />
                    </SwiperSlide>
                ))}

            </Carousel>
        </div>
    );
};

export default FeatureCarousel;
