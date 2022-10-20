import Link from '@components/ui/link';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

interface MenuProps {
  data: any;
  className?: string;
}

const HeaderMenutop: React.FC<MenuProps> = ({ data, className }) => {
  const { t } = useTranslation('menu');
  return (
      <nav
          className={cn(
              ' flex relative -mx-3',
              className
          )}
      >
        {data?.map((item: any) => (
            <div
                className={`menuItem group cursor-pointer mx-3 ${
                    item.subMenu ? 'relative' : ''
                }`}
                key={item.id}
            >
              <Link
                  href={item.path}
                  className="inline-flex items-center text-gray-300 py-2 font-normal relative group-hover:text-skin-primary"
              >
                {t(item.label)}
                {(item?.columns || item.subMenu) && (
                    <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-skin-base opacity-40 group-hover:text-skin-primary">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
                )}
              </Link>

            </div>
        ))}
      </nav>
  );
};

export default HeaderMenutop;
