import type { NextPage } from "next";
import Head from "next/head";
import { getProductsInCollection, getAllBlogs, getBlog } from "@lib/shopify";
import ProductList from "@components/product/product-list";
import Image from "next/legacy/image";
import HeroSlider from "@containers/hero-slider";
import { HomePage } from "@framework/static/banner";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import FeatureBlock from "@containers/feature-block";
import Container from "@components/ui/container";

export default function Home({ products }: any) {
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
        className={sectionCommonStyle}
        buttonGroupClassName="hidden"
      />
      <FeatureBlock />

      <ProductList products={products} />
    </div>
  );
}
Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const products = await getProductsInCollection();
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
