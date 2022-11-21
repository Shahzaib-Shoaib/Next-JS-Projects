import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/product-list";

export default function productpage({ products }:any) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props..
  };
}