import dynamic from "next/dynamic";
import Head from "next/head";
import { getProductsInCollection, getAllBlogs, getBlog } from "@lib/shopify";
import ProductList from "@components/product/product-list";
import HeroSlider from "@containers/hero-slider";
import { HomePage } from "@framework/static/banner";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CollectionBlock from "@containers/collection-block";
import { collectionData as collection } from "@framework/static/collection";
import Container from "@components/ui/container";
import Divider from "@components/ui/divider";

const FeatureCarousel = dynamic(
  () => import("@components/common/featured-carousel"),
  { ssr: false }
);

export default function Home({ products }: any) {
  const sectionCommonStyle = "mb-7 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[75px]";
  return (
    <>
      <HeroSlider
        data={HomePage}
        variantRounded="default"
        variant="fullWidth"
        // className={sectionCommonStyle}
        buttonGroupClassName="hidden"
      />
      <FeatureCarousel />

      <ProductList products={products} />
      <Divider />
      <Container>
        <CollectionBlock data={collection} />
      </Container>
    </>
  );
}
Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const products = await getProductsInCollection(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
      products,
    },
  };
};
