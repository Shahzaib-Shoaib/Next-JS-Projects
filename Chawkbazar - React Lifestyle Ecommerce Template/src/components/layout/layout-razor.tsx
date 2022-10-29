// razor
import { useSessionStorage } from 'react-use';
//import Image from '@components/ui/image';
import HighlightedBar from '@components/common/highlighted-bar-razor';
import Countdown from '@components/common/countdown-razor';
import Header from '@components/layout/header/header-razor';
import Footer from '@components/layout/footer/footer-razor';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation-razor';
import { useTranslation } from 'next-i18next';

const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation('common');
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    'razor-highlightedBar',
    'false'
  );

  return (
    <div className="flex flex-col min-h-screen">
      {highlightedBar !== 'true' && (
        <HighlightedBar onClose={() => setHighlightedBar('true')} variant="highlightedTwo" className="text-white">
          <div className="flex items-center font-razor">
            <p
              dangerouslySetInnerHTML={{
                __html: t('text-highlighted-bar'),
              }}
            />
          </div>
          <Countdown date={Date.now() + 4000000 * 71} />
        </HighlightedBar>
      )}
      {/* End of highlighted bar  */}

      <Header />
      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >

        <>{children}</>
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Layout;
