// razor 7
import Widgets from '@components/layout/footer/widget/widget-footer7-razor';
import Copyright from '@components/layout/footer/copyright-razor';
import { footer } from './data';
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="footer-seven border-t border-black/18 pt-10 md:pt-16 bg-skin-six text-gray-400">
    <Widgets widgets={widgets} />
    <Copyright payment={payment}  />
  </footer>
);

export default Footer;
