import "@styles/globals.css";
//import "../styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
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

