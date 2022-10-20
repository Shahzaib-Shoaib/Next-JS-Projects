import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import  {i18n}  from 'next-i18next';
import { getDirection } from '@utils/get-direction';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }
  
  render() {
    const { locale } = this.props.__NEXT_DATA__;
   // console.log(this.props.__NEXT_DATA__.props,'dddd');
   // console.log({ locale },'rdfrrgdrg');
    
     if (process.env.NODE_ENV !== 'production') {
       i18n!.reloadResources(locale);
     }
        
        
    return (

      <Html dir={getDirection(locale)}>
        <Head>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
