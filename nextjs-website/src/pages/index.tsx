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

export default function Home({ products,language }: any) {
  
  const sectionCommonStyle = "mb-7 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[75px]";
  return (
    <div className="">
      <Head>
        <title>Ecommerce Store</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more."
        />
        <meta property="og:title" content="Modern eCommerce Course" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buildnextshop.com" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/share.png"
        />
        <meta
          property="og:description"
          content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce Course" />
      </Head>
      <HeroSlider
        data={HomePage}
        variantRounded="default"
        variant="fullWidth"
        // className={sectionCommonStyle}
        buttonGroupClassName="hidden"
      />
      <FeatureCarousel />
    
      <ProductList products={products} language={language} />
      <Divider/>
      <Container>
        <CollectionBlock data={collection} />
      </Container>
    </div>
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
