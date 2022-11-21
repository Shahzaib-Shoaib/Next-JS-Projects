import type { AppProps } from 'next/app'
import "@styles/globals.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Layout from "@components/layout/layout";
import ShopProvider from "@contexts/shopContext";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
     </ShopProvider>
  );}

export default MyApp