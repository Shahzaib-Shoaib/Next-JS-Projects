import { useState, useContext } from "react";
import { formatter } from "@utils/helper";
import ProductOptions from "./product-options";
import { CartContext } from "@contexts/shopContext";

export default function ProductForm({ product }: any) {
  const { addToCart }:any = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant:any) => {
    const allOptions:any = {};

    variant.node.selectedOptions.map((item:any) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues:any = {};
  product.options.map((item:any) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name:any, value:any) {
    setSelectedOptions((prevState:any) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item:any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className='rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3'>
      <h2 className='text-2xl font-bold'>{product.title}</h2>
      <span className='pb-3'>
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }:any) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className='bg-black rounded-lg text-white px-2 py-3 mt-3 hover:bg-gray-800'
      >
        Add To Cart
      </button>
    </div>
  );
}