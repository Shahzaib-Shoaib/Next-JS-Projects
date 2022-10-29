// razor
import HeroBannerCard from './hero-banner-card-razor';
import Carousel from '@components/ui/carousel/carousel-razor';
import { SwiperSlide } from '@components/ui/carousel/slider-razor';

interface Props {
    heroBanner?: any;
    className?: string;
    contentClassName?: string;
    heroContent?: boolean;
}

const HeroTwoSliderBlock: React.FC<Props> = ({
     heroBanner,
     className = 'mb-7 font-razor',
     contentClassName = 'py-24',
     heroContent = true,
     }) => {
    return (
        <div className={`${className}`}>
            <Carousel
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={true}
                prevActivateId={`prevActivateId`}
                nextActivateId={`nextActivateId`}
                className ={'rounded-md overflow-hidden'}
            >
                {heroBanner?.map((banner: any) => (
                    <SwiperSlide key={`banner--key${banner.id}`}>
                        <HeroBannerCard
                            banner={banner}
                            variant="slider"
                            heroContentCard={heroContent}
                            className={contentClassName}
                        />
                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroTwoSliderBlock;
