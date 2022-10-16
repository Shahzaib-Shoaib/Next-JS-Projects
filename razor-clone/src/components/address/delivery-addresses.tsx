import { useAddressQuery } from '../../framework/basic-rest/address/address';
import AddressGrid from '../address/address-grid';
import { useModalAction } from '../common/modal/modal.context';
import CloseButton from '../ui/close-button';
import Heading from '../ui/heading';
import { useTranslation } from 'next-i18next';

const DeliveryAddresses: React.FC = () => {
  const { t } = useTranslation('common');
  let { data, isLoading } = useAddressQuery();
  const { closeModal } = useModalAction();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-[820px] bg-skin-fill p-10 border border-skin-base rounded-md relative">
      <CloseButton onClick={closeModal} />
      <div className="w-full">
        <Heading variant="title" className="mb-8 -mt-1.5">
          {t('text-delivery-address')}
        </Heading>
        <AddressGrid address={data?.data} />
      </div>
    </div>
  );
};

export default DeliveryAddresses;
