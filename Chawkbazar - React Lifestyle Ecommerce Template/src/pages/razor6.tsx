// razor 6
import Seo from '@components/seo/seo-razor';
import FeatureCarousel from "@components/common/featured-carousel-four-razor";
import Layout from '@components/layout/layout-razor-six';
import Container from '@components/ui/container-razor';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {
    homeSixHeroSlider as heroSlider,
    homeFourGridHero as bannerGrid,
    bannerDiscount as brandCarousel,
    homeFourGridHero2 as bannerGrid2,
} from '@framework/static/banner-razor';
import {GetStaticProps} from 'next';
import {QueryClient} from 'react-query';
import {dehydrate} from 'react-query/hydration';
import {API_ENDPOINTS} from '@framework/utils/api-endpoints';
import LatestblogCarousel from "@components/common/latestblog-four-razor";
import {fetchBestSellerProducts} from '@framework/product/get-all-best-seller-products';
import {LIMITS} from '@framework/utils/limits-razor';
import HeroSliderBlock from "@components/hero/hero-slider-block-razor";
import BannerGrid from "@components/common/banner-grid-razor";
import ListingTabsElectronicFeed from "@components/product/feeds/listingtabs-electronic-v2-razor";
import ListingTabsClothFeed from "@components/product/feeds/listingtabs-cloth-v2-razor";

import BestSellerProductFeed from "@components/product/feeds/best-seller-top-product-razor";

export default function Home() {
    return (
        <>
            <Seo
                title="Electronics Store Store React Template"
                description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                path="home6"
            />

            <HeroSliderBlock
                heroBanner={heroSlider}
                heroContent={false}
                className={`lg:mb-8 `}
                contentClassName="p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[450px]"
            />

            <Container className={"sm:max-w-[1730px]"}>
                <FeatureCarousel className={"home4-featuredCarousel"} classNameCarousel={"bg-white"}/>
                <BannerGrid
                    data={bannerGrid}
                    grid={3}
                    className="mb-8 lg:mb-12"
                />
                <BestSellerProductFeed  />

                <ListingTabsElectronicFeed />

                <BannerGrid
                    data={bannerGrid2}
                    grid={3}
                    className="mb-8 lg:mb-12"
                />

                <ListingTabsClothFeed colSiderbar={false}/>

                <LatestblogCarousel className="mb-8 lg:mb-12"/>

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
