// razor 2
import LatestblogCard from '@components/cards/latestblog-card-razor';
import SectionHeader from '@components/common/section-header-razor';
//import Container from '@components/ui/container';
import {useWindowSize} from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel-razor';
import {SwiperSlide} from '@components/ui/carousel/slider-razor';
import {ROUTES} from '@utils/routes';

const data = [
    {
        id: 1,
        slug: 'feel-the-thirsty-in-summer-anytime',
        image: '/assets/images/collection/1.jpg',
        title: 'collection-title-one',
        description: 'collection-description-one',
    },
    {
        id: 2,
        slug: 'most-popular-item-for-Fast-food',
        image: '/assets/images/collection/2.jpg',
        title: 'collection-title-two',
        description: 'collection-description-two',
    },
    {
        id: 3,
        slug: 'authentic-japanese-food-in-real-taste',
        image: '/assets/images/collection/3.jpg',
        title: 'collection-title-three',
        description: 'collection-description-three',
    }
];

interface Props {
    className?: string;
    headingPosition?: 'left' | 'center';
}

const breakpoints = {
    '1024': {
        slidesPerView: 1,
    },
    '768': {
        slidesPerView: 1,
    },
    '540': {
        slidesPerView: 1,
    },
    '0': {
        slidesPerView: 1,
    },
};

const Latestblog: React.FC<Props> = ({
                                         className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
                                         headingPosition = 'left',
                                     }) => {
    const {width} = useWindowSize();
    return (
        <div className={className}>

            <SectionHeader sectionHeading="text-latestblog" className="mb-5 md:mb-6 block-title"/>
            <Carousel
                breakpoints={breakpoints}
                autoplay={false}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                className="-mx-1.5 md:-mx-2 xl:-mx-2.5 -my-4"
                prevActivateId="collection-carousel-button-prev"
                nextActivateId="collection-carousel-button-next"
            >
                {data?.map((item) => (
                    <SwiperSlide
                        key={`collection-key-${item.id}`}
                        className="px-1.5 md:px-2 xl:px-2.5 py-4"
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

export default Latestblog;
