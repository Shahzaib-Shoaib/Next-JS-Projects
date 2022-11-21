import type { NextPage } from 'next'
import Head from 'next/head'
import { getProductsInCollection } from "../lib/shopify";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Image from "next/legacy/image";

const Home: NextPage = ({ products }:any) => {

  console.log(products);

  return (
    <div className=''>
      <Head>
        <title>Ecommerce Store</title>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          httpEquiv='Content-Type'
          content='text/html; charset=ISO-8859-1'
        />
        <meta
          name='description'
          content='Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.'
        />
        <meta property='og:title' content='Modern eCommerce Course' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.buildnextshop.com' />
        <meta
          property='og:image'
          content='https://www.buildnextshop.com/share.png'
        />
        <meta
          property='og:description'
          content='Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='Modern eCommerce Course' />
      </Head>

      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export default Home

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props..
  };
}
