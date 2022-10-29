// razor
import Widgets from './widget/widget-razor';
import Copyright from './copyright-razor';
import { footer } from './data';
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="bg-skin-footer font-razor">
    <Widgets widgets={widgets} />
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
