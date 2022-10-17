import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { ManagedUIContext } from '../contexts/ui.context';
import ManagedModal from '../components/common/modal/managed-modal';
import ManagedDrawer from '../components/common/drawer/managed-drawer';




function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
