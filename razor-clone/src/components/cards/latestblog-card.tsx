// 2
import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
import Text from '@components/ui/text';
import { useTranslation } from 'next-i18next';
import { collectionPlaceholder } from '@assets/placeholders';
//import Latestblog from "@components/common/latestblog";

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  href: LinkProps['href'];
  collection: {
    image: string;
    title: string;
    description?: string;
  };
}

const LatestblogCard: React.FC<Props> = ({
  collection,
  imgWidth = 440,
  imgHeight = 280,
  href,
}) => {
  const { image, title, description } = collection;
  const { t } = useTranslation('common');
  return (
    <Link
      href={href}
      className="group flex flex-col "
    >
      <Image
        src={image ?? collectionPlaceholder}
        alt={t(title) || t('text-card-thumbnail')}
        width={imgWidth}
        height={imgHeight}
        className="overflow-hidden  bg-skin-thumbnail object-cover transform transition duration-300 ease-in-out group-hover:opacity-90 "
      />
      <div className="flex flex-col mt-2 mb-10 ">
        <Heading
          variant="title"
          className="mb-1 lg:mb-1.5 text-lg  group-hover:text-skin-primary"
        >
          {t(title)}
        </Heading>
        <Text variant="body" className="mb-10 ">
          {t(`${description}`)}
        </Text>
      </div>
    </Link>
  );
};

export default LatestblogCard;
