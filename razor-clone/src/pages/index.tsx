import Seo from '../components/seo/seo'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticProps} from 'next';
import {QueryClient} from 'react-query';
import {dehydrate} from 'react-query/hydration';
import Container from '../components/ui/container'
import HeroSliderBlock from '../components/hero/hero-slider-block'
import {API_ENDPOINTS} from '../framework/basic-rest/utils/api-endpoints';
import {fetchCategories} from '../framework/basic-rest/category/get-all-categories';
import {LIMITS} from '../framework/basic-rest/utils/limits';
import {fetchBestSellerProducts} from "../framework/basic-rest/product/get-all-best-seller-products";
import {fetchPopularProducts} from '../framework/basic-rest/product/get-all-popular-products';


export default function Home()  {
  return (
    <>
     <Seo
                title="Babuska Store"
                description="Fastest E-commerce store built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                path="/"
            />
                        <Container>
                        {/* <HeroSliderBlock
                     heroBanner={heroBanner}
                    className={`mb-7 mt-6`}
                    contentClassName="p-5 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24"
                />  */}
                        </Container>

    </>
  )
}


Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
        [API_ENDPOINTS.CATEGORIES, {limit: LIMITS.CATEGORIES_LIMITS}],
        fetchCategories
    );

    await queryClient.prefetchQuery(
        [
            API_ENDPOINTS.BEST_SELLER_PRODUCTS, {limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS},
        ],
        fetchBestSellerProducts
    );

    await queryClient.prefetchQuery(
        [API_ENDPOINTS.POPULAR_PRODUCTS, {limit: LIMITS.POPULAR_PRODUCTS_LIMITS}],
        fetchPopularProducts
    );

    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
            ...(await serverSideTranslations(locale!, [
                'common',
                'forms',
                'menu',
                'footer',
            ])),
        },
        revalidate: 60,
    };
};
