// import "@styles/globals.css";

// import type { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
// //import { ManagedUIContext } from '@contexts/ui.context';
// //import ManagedModal from '@components/common/modal/managed-modal';
// //import ManagedDrawer from '@components/common/drawer/managed-drawer';
// import { useEffect, useRef } from 'react';
// import { ToastContainer } from 'react-toastify';
// //import { ReactQueryDevtools } from 'react-query/devtools';
// import { appWithTranslation } from 'next-i18next';
// import { DefaultSeo } from '@components/seo/default-seo';

// import { getDirection } from '@utils/get-direction';

// const Noop: React.FC = ({ children }) => <>{children}</>;

// const MyApp = ({ Component, pageProps }: AppProps) => {
  
//   const router = useRouter();
//   const dir = getDirection(router.locale);
//   useEffect(() => {
//     document.documentElement.dir = dir;
//   }, [dir]);
//   const Layout = (Component as any).Layout || Noop;

//   return (
//           <>
//             <DefaultSeo />
//             <Layout pageProps={pageProps}>
//               <Component {...pageProps} key={router.route} />
//             </Layout>
//             <ToastContainer />
//           </>
//   );
// };

// export default appWithTranslation(MyApp);




import "@styles/globals.css";
//import "../styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/layout/footer/footer";
import { AppProps } from "next/app"
import { FunctionComponent } from "react"
import {ReactNode} from 'react'
import { DefaultSeo } from '@components/seo/default-seo';

interface ReturnNode {
  children: ReactNode |  ReactNode[];
} 
const Noop = ({children}:ReturnNode):JSX.Element => <>{children}</>


// page component and page props passed in 
// Layout included in component object
function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FunctionComponent}}) {

  // if no layout Noop returns just chldren in fragment
  const Layout = Component.Layout ?? Noop

  return (
    <div>
      <DefaultSeo />
      <Navbar />
      <Component {...pageProps} />
      <Footer /> 
     
       {/* <Layout>
      <Component {...pageProps } />
      </Layout>  */}

    </div>
  )
}


export default MyApp

/*
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
*/

