// razor
import Seo from "@components/seo/seo-razor";
import Layout from "@components/layout/layout-razor";
import { QueryClient } from "react-query";
import { GetStaticProps } from "next";
import { dehydrate } from "react-query/hydration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
//import {fetchPopularProducts} from '@framework/product/get-all-popular-products';
import { fetchBestSellerProducts } from "@framework/product/get-all-best-seller-products";
import { fetchTopSellerProducts } from "@framework/product/get-all-top-seller-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { LIMITS } from "@framework/utils/limits-razor";
import Container from "@components/ui/container-razor";
import {
  bannerDiscount,
  bannersGridHero as bannerTwo,
  bannersGridHero2 as bannerTwo2,
  homeTwoHeroBanner as heroBanner,
} from "@framework/static/banner-razor";
import HeroSliderBlock from "@components/hero/hero-slider-block-razor";
import FeatureCarousel from "@components/common/featured-carousel-razor";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed-razor";
import BannerGridTwo from "@components/common/banner-grid-two-razor";
import SupperCategoryElectronicFeed from "@components/product/feeds/suppercategory-electronic-feed-razor";
import SupperCategoryClothFeed from "@components/product/feeds/suppercategory-cloth-feed-razor";
import CategoryGridListBlock from "@components/common/category-grid-list-block-razor";
import BannerAllCarousel from "@components/common/banner-all-carousel-razor";

export default function Home() {
  return (
    <>
      <Seo
        title="Babuska Store"
        description="Fastest E-commerce store built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="/"
      />
      <Container>
        <HeroSliderBlock
          heroBanner={heroBanner}
          className={`mb-7 mt-6`}
          contentClassName="p-5 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24"
        />
        <FeatureCarousel />
        <BestSellerProductFeed />
        <BannerGridTwo
          data={bannerTwo}
          className="mb-8 lg:mb-12"
          gridClassName="xl:gap-5 "
        />
        <SupperCategoryElectronicFeed />
        <BannerGridTwo
          data={bannerTwo2}
          className="mb-8 lg:mb-12"
          gridClassName="xl:gap-5 2xl:grid-cols-[minmax(1130px,1fr)1fr] "
        />
        <SupperCategoryClothFeed />
        <CategoryGridListBlock className="mb-6 lg:mb-8" />
        <BannerAllCarousel data={bannerDiscount} className="mb-8 lg:mb-12" />
      </Container>
    </>
  );
}


Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORIES, { limit: LIMITS.CATEGORIES_LIMITS }],
    fetchCategories
  );

  await queryClient.prefetchQuery(
    [
      API_ENDPOINTS.BEST_SELLER_PRODUCTS,
      { limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS },
    ],
    fetchBestSellerProducts
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.TOP_SELLER_PRODUCTS, { limit: LIMITS.TOP_SELLER_PRODUCTS }],
    fetchTopSellerProducts
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
    revalidate: 60,
  };
};
