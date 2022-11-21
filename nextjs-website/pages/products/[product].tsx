import ProductPageContent from "../../components/product-page-content";
import { getAllProducts, getProduct } from "../../lib/shopify";

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

export async function getStaticProps({ params }:any) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}