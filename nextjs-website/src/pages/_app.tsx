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
import "swiper/scss/pagination";
// import Layout from "@components/layout/layout";
import { useRouter } from "next/router";
import { ManagedUIContext } from "@contexts/ui.context";
import { getDirection } from "@utils/get-direction";
import { appWithTranslation } from "next-i18next";

type Props = {
  children?: React.ReactNode;
};

const Noop: React.FC<Props> = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;
//   console.log(router,"ddddddd");

  return (
    <ManagedUIContext>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ManagedUIContext>
  );
};

export default appWithTranslation(CustomApp);
