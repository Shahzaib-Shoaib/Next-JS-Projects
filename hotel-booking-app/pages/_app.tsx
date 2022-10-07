import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import MainNavigation from '../components/MainNavigation'


function MyApp({ Component, pageProps }: AppProps) {
  return(
<>
<Head>
				<title> Hotel App</title>
			
			</Head>

    <MainNavigation/>

   <Component {...pageProps} />
   </>
   )
}

export default MyApp
