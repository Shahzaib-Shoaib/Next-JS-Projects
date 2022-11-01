// razor 3
import { useSessionStorage } from 'react-use';
import Image from '@components/ui/image-razor';
import HighlightedBar from '@components/common/highlighted-bar-razor';
import Countdown from '@components/common/countdown-razor';
import Header from '@components/layout/header/header-razor-three';
import Footer from '@components/layout/footer/footer-razor';
import { useTranslation } from 'next-i18next';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation-razor';

const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation('common');
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    'borobazar-highlightedBar',
    'false'
  );

  return (
    <div className="flex flex-col min-h-screen">
      {highlightedBar !== 'true' && (
        <HighlightedBar onClose={() => setHighlightedBar('true')}>
          <div className="flex items-center">
            <div className="hidden sm:flex flex-shrink-0 items-center justify-center bg-skin-fill w-9 h-9 rounded-full me-2.5">
              <Image
                width={23}
                height={23}
                src="/assets-razor/images/delivery-box.svg"
                alt="Delivery Box"
              />
            </div>
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
        {children}
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Layout;
