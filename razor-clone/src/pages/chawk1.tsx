// chawk
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@components/layout/layout-chawk";
import BannerBlock from "@containers/banner-block-chawk";
import { homeThreeMasonryBanner as masonryBanner } from "@framework/static/banner-chawk";
import Container from "@components/ui/container-chawk";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block-chawk";
import BannerSliderBlock from "@containers/banner-slider-block-chawk";
import CategoryBlock from "@containers/category-block-chawk";
import ProductsFeatured from "@containers/products-featured-chawk";
import BannerCard from "@components/common/banner-card-chawk";
import { ROUTES } from "@utils/routes";
import { homeThreeBanner as banner } from "@framework/static/banner-chawk";
import BrandGridBlock from "@containers/brand-grid-block-chawk";
import BannerWithProducts from "@containers/banner-with-products-chawk";
import ExclusiveBlock from "@containers/exclusive-block-chawk";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed-chawk";
import DownloadApps from "@components/common/download-apps-chawk";
import Support from "@components/common/support-chawk";
import Instagram from "@components/common/instagram-chawk";
import Subscription from "@components/common/subscription-chawk";
import Divider from "@components/ui/divider";

export default function Home() {
  return (
    <>
      <BannerBlock data={masonryBanner} />
      <Container>
        <ProductsFlashSaleBlock date={"2023-09-22T01:02:03"} />
      </Container>
      <BannerSliderBlock />
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" type="rounded" />
        <ProductsFeatured sectionHeading="text-featured-products" limit={5} />
        <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={`${ROUTES.SEARCH}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BrandGridBlock sectionHeading="text-top-brands" />
        <BannerCard
          key={`banner--key${banner[1].id}`}
          banner={banner[1]}
          href={`${ROUTES.PRODUCTS}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
        />
        <ExclusiveBlock />
        <NewArrivalsProductFeed />
        <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
