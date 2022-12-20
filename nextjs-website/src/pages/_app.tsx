import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@styles/globals.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";
import "@styles/scrollbar.css";
import "@styles/tailwind.css";
// base css file
import "@styles/swiper-carousel.css";
import "@styles/custom-plugins.css";
import "@styles/themes.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import { AnimatePresence } from "framer-motion";

import "swiper/scss/pagination";
// import Layout from "@components/layout/layout";
import { useRouter } from "next/router";
import { ManagedUIContext } from "@contexts/ui.context";
import { getDirection } from "@utils/get-direction";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";


function handleExitComplete() {
	if (typeof window !== "undefined") {
		window.scrollTo({ top: 0 });
	}
}

type Props = {
  children?: React.ReactNode;
};

const Noop: React.FC<Props> = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps, router }: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  // let router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;
// console.log(pageProps._nextI18Next.initialLocale);
// console.log(router.locale);

  return (

    <QueryClientProvider client={queryClientRef.current}>
      <ManagedUIContext>
        <Layout pageProps={pageProps} language={router.locale}>
          <Component {...pageProps} language={router.locale} />
        </Layout>
      </ManagedUIContext>
    </QueryClientProvider>
  );
};

export default appWithTranslation(CustomApp);

