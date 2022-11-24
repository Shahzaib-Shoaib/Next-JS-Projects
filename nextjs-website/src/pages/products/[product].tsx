import ProductPageContent from "@components/product/product-page-content";
import { getAllProducts, getProduct } from "@lib/shopify";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function ProductPage({ product }:any) {
  return (
    <div className='min-h-screen py-12 sm:pt-20'>
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item:any) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

ProductPage.Layout = Layout;


export async function getStaticProps({ params,locale }:any) {
  const product = await getProduct(params.product);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
      product
    },
  };
}