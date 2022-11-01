// razor 3
//import Testimonial from '@components/common/testimonial';
import Seo from '@components/seo/seo-razor';
import FeatureCarousel from "@components/common/featured-carousel-razor";
import Layout from '@components/layout/layout-razor-three';
import Container from '@components/ui/container-razor';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import BannerGridTwo from '@components/common/banner-grid-two-razor';
import {
    //homeTwoGridHero2 as bannerGridHero2,
    //homeTwoGridHero as bannerGridHero,
    homeThreeHeroCarousel as bannerHeroCarousel,
    homeThreeHeroSlider as heroSlider,
    bannersGridHero as bannerTwo, bannerDiscount, bannersGridHero2 as bannerTwo2,
} from '@framework/static/banner-razor';
import {GetStaticProps} from 'next';
import {QueryClient} from 'react-query';
import {dehydrate} from 'react-query/hydration';
import {API_ENDPOINTS} from '@framework/utils/api-endpoints';
import {fetchBestSellerProducts} from '@framework/product/get-all-best-seller-products';
import {LIMITS} from '@framework/utils/limits-razor';
import HeroSliderBlock from "@components/hero/hero-slider-block-razor";
import BannerGrid from "@components/common/banner-grid-razor";
import ListingTabsElectronicFeed from "@components/product/feeds/listingtabs-electronic-feed-razor";
import CategoryGridListBlock from "@components/common/category-grid-list-block-razor";
import BannerAllCarousel from "@components/common/banner-all-carousel-razor";
import ListingTabsClothFeed from "@components/product/feeds/listingtabs-cloth-feed-razor";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed-razor";

export default function Home() {
    return (
        <>
            <Seo
                title="Electronics Store Store React Template"
                description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                path="home3"
            />
            <Container>
                <div className="grid gap-4 grid-cols-1 xl:gap-5 lg:grid-cols-[minmax(65%,1fr)1fr] 2xl:grid-cols-[minmax(68%,1fr)1fr]">
                    <HeroSliderBlock
                        heroBanner={heroSlider}
                        heroContent={false}
                        className={`lg:mb-7 mt-6`}
                        contentClassName="p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[448px]"
                    />
                    <BannerGrid
                        data={bannerHeroCarousel}
                        grid={1}
                        className="mb-7 mt-3 lg:mt-6 staticBanner--slider"
                    />
                </div>
                <FeatureCarousel/>
                <BestSellerProductFeed/>
                <BannerGridTwo
                    data={bannerTwo}
                    className="mb-8 lg:mb-12"
                    gridClassName="xl:gap-5 "
                />
                <ListingTabsElectronicFeed colSiderbar={false} />
                <BannerGridTwo
                    data={bannerTwo2}
                    className="mb-8 lg:mb-12"
                    gridClassName="xl:gap-5 2xl:grid-cols-[minmax(1130px,_1fr)_1fr] "
                />
                <ListingTabsClothFeed colSiderbar={false}/>
                <CategoryGridListBlock  className="mb-6 lg:mb-8" />
                <BannerAllCarousel
                    data={bannerDiscount}
                    className="mb-8 lg:mb-12"
                />
            </Container>


        </>
    );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
        [
            API_ENDPOINTS.BEST_SELLER_PRODUCTS,
            {limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS},
        ],
        fetchBestSellerProducts
    );

    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
            ...(await serverSideTranslations(locale!, [
                'common',
                'forms',
                'menu',
                'footer',
            ])),
        },
        revalidate: 60,
    };
};
