import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import  isEmpty  from 'lodash/isEmpty';
import { ROUTES } from '../../utils/routes';
import Button from '../ui/button';
import Counter from '../ui/counter';
import { useCart } from '../../contexts/cart/cart.context';
import ProductAttributes from '../product/product-attributes';
import { generateCartItem } from '../../utils/generate-cart-item';
import usePrice from '../../framework/basic-rest/product/use-price';
import { getVariations } from '../../framework/basic-rest/utils/get-variations';
import { useTranslation } from 'next-i18next';
import ThumbnailCarousel from '../ui/carousel/thumbnail-carousel';
import Image from '../ui/image';
import CartIcon from '../icons/cart-icon';
import Heading from '../ui/heading';
import Text from '../ui/text';
import TagLabel from '../ui/tag-label';
import LabelIcon from '../icons/label-icon';
import { IoArrowRedoOutline } from 'react-icons/io5';
//import RelatedProductFeed from '@components/product/feeds/related-product-feed';
import SocialShareBox from '../ui/social-share-box';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { toast } from 'react-toastify';
import useWindowSize from '../../utils/use-window-size';
import {
  useModalAction,
  useModalState,
} from '../common/modal/modal.context';
import CloseButton from '../ui/close-button';
import VariationPrice from './variation-price';
import isEqual from 'lodash/isEqual';
import { productGalleryPlaceholder } from '../../assets/placeholders';

const breakpoints = {
  '1536': {
    slidesPerView: 6,
  },
  '1280': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '640': {
    slidesPerView: 3,
  },
  '360': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

export default function ProductPopup() {
  const { t } = useTranslation('common');
  const { data } = useModalState();
  const { width } = useWindowSize();
  const { closeModal } = useModalAction();
  const router = useRouter();
  const { addItemToCart, isInCart, getItemFromCart, isInStock } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [addToWishlistLoader, setAddToWishlistLoader] =
    useState<boolean>(false);
  const [shareButtonStatus, setShareButtonStatus] = useState<boolean>(false);
  const { price, basePrice, discount } = usePrice({
    amount: data.sale_price ? data.sale_price : data.price,
    baseAmount: data.price,
    currencyCode: 'USD',
  });
  const variations = getVariations(data.variations);
  const { slug, image, name, unit, description, gallery, tag, quantity } = data;
  const productUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.PRODUCT}/${slug}`;
  const handleChange = () => {
    setShareButtonStatus(!shareButtonStatus);
  };
  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;
  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = data?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }
  const item = generateCartItem(data, selectedVariation);
  const outOfStock = isInCart(item.id) && !isInStock(item.id);
  function addToCart() {
    if (!isSelected) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 1500);
    addItemToCart(item, selectedQuantity);
    toast(t('text-added-bag'), {
      progressClassName: 'fancy-progress-bar',
      position: width! > 768 ? 'bottom-right' : 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  function addToWishlist() {
    setAddToWishlistLoader(true);
    setFavorite(!favorite);
    const toastStatus: string =
      favorite === true ? t('text-remove-favorite') : t('text-added-favorite');
    setTimeout(() => {
      setAddToWishlistLoader(false);
    }, 1500);
    toast(toastStatus, {
      progressClassName: 'fancy-progress-bar',
      position: width! > 768 ? 'bottom-right' : 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function navigateToProductPage() {
    closeModal();
    router.push(`${ROUTES.PRODUCT}/${slug}`);
  }

  useEffect(() => setSelectedQuantity(1), [data.id]);

  return (
    <div className="md:w-[600px] lg:w-[940px] xl:w-[1180px]  mx-auto p-1 lg:p-0 xl:p-3 bg-skin-fill rounded-md">
      <CloseButton onClick={closeModal} />
      <div className="overflow-hidden">
        <div className="px-2 md:px-5 mb-2 lg:mb-2 pt-4 md:pt-7 ">
          <div className="lg:flex items-start justify-between gap-8">
            <div className="xl:flex items-center justify-center overflow-hidden">
              {!!gallery?.length ? (
                <ThumbnailCarousel gallery={gallery} />
              ) : (
                <div className="w-auto flex items-center justify-center">
                  <Image
                    src={image?.original ?? productGalleryPlaceholder}
                    alt={name!}
                    width={650}
                    height={590}
                  />
                </div>
              )}
            </div>

            <div className="flex-shrink-0 flex flex-col lg:w-[430px] xl:w-[520px] 2xl:w-[520px]">
              <div className="pt-5 lg:pt-0 pb-5">
                <div
                  className="mb-2 md:mb-2.5 block -mt-1.5"
                  onClick={navigateToProductPage}
                  role="button"
                >
                  <h2 className="text-skin-base text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300 hover:text-skin-primary">
                    {name}
                  </h2>
                </div>
                {unit && isEmpty(variations) ? (
                  <div className="text-sm md:text-15px font-medium">{unit}</div>
                ) : (
                  <VariationPrice
                    selectedVariation={selectedVariation}
                    minPrice={data.min_price}
                    maxPrice={data.max_price}
                  />
                )}

                {isEmpty(variations) && (
                  <div className="flex items-center mt-5">
                    <div className="text-skin-primary font-semibold text-base md:text-xl xl:text-[30px]">
                      {price}
                    </div>
                    {discount && (
                      <>
                        <del className="text-sm md:text-15px ps-3 text-skin-base text-opacity-50">
                          {basePrice}
                        </del>
                        <span className="inline-block rounded font-semibold	 text-xs md:text-sm bg-skin-tree bg-opacity-20 text-skin-tree uppercase px-2 py-1 ms-2.5">
                          {discount} {t('text-off')}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {Object.keys(variations).map((variation) => {
                return (
                  <ProductAttributes
                    key={`popup-attribute-key${variation}`}
                    variations={variations}
                    attributes={attributes}
                    setAttributes={setAttributes}
                  />
                );
              })}

              <div className="pb-2">
                {/* check that item isInCart and place the available quantity or the item quantity */}
                {isEmpty(variations) && (
                  <>
                    {Number(quantity) > 0 || !outOfStock ? (
                      <span className="text-sm font-medium text-skin-yellow-two">
                        {t('text-only') +
                          ' ' +
                          quantity +
                          ' ' +
                          t('text-left-item')}
                      </span>
                    ) : (
                      <div className="text-base text-red-500 whitespace-nowrap">
                        {t('text-out-stock')}
                      </div>
                    )}
                  </>
                )}

                {!isEmpty(selectedVariation) && (
                  <span className="text-sm font-medium text-skin-yellow-two">
                    {selectedVariation?.is_disable ||
                    selectedVariation.quantity === 0
                      ? t('text-out-stock')
                      : `${
                          t('text-only') +
                          ' ' +
                          selectedVariation.quantity +
                          ' ' +
                          t('text-left-item')
                        }`}
                  </span>
                )}
              </div>

              <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                <Counter
                  variant="single"
                  value={selectedQuantity}
                  onIncrement={() => setSelectedQuantity((prev) => prev + 1)}
                  onDecrement={() =>
                    setSelectedQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                  }
                  disabled={
                    isInCart(item.id)
                      ? getItemFromCart(item.id).quantity + selectedQuantity >=
                        Number(item.stock)
                      : selectedQuantity >= Number(item.stock)
                  }
                />
                <Button
                  onClick={addToCart}
                  className="w-full px-1.5"
                  disabled={!isSelected}
                  loading={addToCartLoader}
                >
                  <CartIcon color="#ffffff" className="me-3" />
                  {t('text-add-to-cart')}
                </Button>
                <div className="grid grid-cols-2 gap-2.5">
                  <Button
                    variant="border"
                    onClick={addToWishlist}
                    loading={addToWishlistLoader}
                    className={`group hover:text-skin-primary ${
                      favorite === true && 'text-skin-primary'
                    }`}
                  >
                    {favorite === true ? (
                      <IoIosHeart className="text-2xl md:text-[26px] me-2 transition-all" />
                    ) : (
                      <IoIosHeartEmpty className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary" />
                    )}

                    {t('text-wishlist')}
                  </Button>
                  <div className="relative group">
                    <Button
                      variant="border"
                      className={`w-full hover:text-skin-primary ${
                        shareButtonStatus === true && 'text-skin-primary'
                      }`}
                      onClick={handleChange}
                    >
                      <IoArrowRedoOutline className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary" />
                      {t('text-share')}
                    </Button>
                    <SocialShareBox
                      className={`absolute z-10 end-0 w-[300px] md:min-w-[400px] transition-all duration-300 ${
                        shareButtonStatus === true
                          ? 'visible opacity-100 top-full'
                          : 'opacity-0 invisible top-[130%]'
                      }`}
                      shareUrl={productUrl}
                    />
                  </div>
                </div>
              </div>
              {tag && (
                <ul className="pt-5 xl:pt-6">
                  <li className="text-sm md:text-15px text-skin-base text-opacity-80 inline-flex items-center justify-center me-2 relative top-1">
                    <LabelIcon className="me-2" /> {t('text-tags')}:
                  </li>
                  {tag?.map((item: any) => (
                    <li className="inline-block p-[3px]" key={`tag-${item.id}`}>
                      <TagLabel data={item} />
                    </li>
                  ))}
                </ul>
              )}

              <div className="pt-6 xl:pt-8 pb-6">
                <Heading className="mb-3 lg:mb-3.5">
                  {t('text-product-details')}:
                </Heading>
                <Text variant="small">
                  {description.split(' ').slice(0, 40).join(' ')}
                  {'...'}
                  <span
                    onClick={navigateToProductPage}
                    role="button"
                    className="text-skin-primary ms-0.5"
                  >
                    {t('text-read-more')}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
