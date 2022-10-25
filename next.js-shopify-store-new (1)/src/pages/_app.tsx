import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
//import { ManagedUIContext } from '@contexts/ui.context';
//import ManagedModal from '@components/common/modal/managed-modal';
//import ManagedDrawer from '@components/common/drawer/managed-drawer';
import { useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
//import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from '@components/seo/default-seo';

import "../styles/globals.css";
import { getDirection } from '@utils/get-direction';

const Noop: React.FC = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  const router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;

  return (
          <>
            <DefaultSeo />
            <Layout pageProps={pageProps}>
              <Component {...pageProps} key={router.route} />
            </Layout>
            <ToastContainer />
          </>
  );
};

export default appWithTranslation(MyApp);