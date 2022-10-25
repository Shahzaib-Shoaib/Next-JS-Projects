import BannerCard from '@components/cards/banner-card';
import useWindowSize from '@utils/use-window-size';
//import Carousel from '@components/ui/carousel/carousel';
//import { SwiperSlide } from '@components/ui/carousel/slider';

interface BannerProps {
  data: any;
  className?: string;
  gridClassName?: string;
}

const BannerGridTwo: React.FC<BannerProps> = ({
  data,
  className = 'mb-3 md:mb-4 lg:mb-5 xl:mb-6',
  gridClassName = '2xl:gap-5',
}) => {
  const { width } = useWindowSize();
  return (
    <div className={className}>
        <div
          className={`grid gap-4 grid-cols-1 lg:grid-cols-2 ${gridClassName}`}
        >
          {data?.map((banner: any) => (
            <BannerCard
              key={`banner--key${banner.id}`}
              banner={banner}
              effectActive={true}
            />
          ))}
        </div>
    </div>
  );
};

export default BannerGridTwo;
