import Image from "next/legacy/image";
import Link from "next/link";
import ProductForm from "./product-form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommendedList from "./recommended-list";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

export default function ProductPageContent({ product }: any) {
  const images: any = [];

  product.images.edges.map((image: any, i: any) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          <div className="relative h-96 w-full">
            <Swiper
              navigation
              // pagination={{ clickable: true }}
              className="h-96 rounded-2xl text-[#262626]"
              loop={true}
            >
              {images}
            </Swiper>
          </div>
        </div>
        <ProductForm product={product} />
      </div>

      <div className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
        <a
          href={`//www.facebook.com/sharer.php?u=https://artistro-clone-924622.vercel.app/products/${product.handle}`}
        >
          <FaFacebook className="text-blue-800 text-lg" />
        </a>
        <a
          href={`//twitter.com/share?text=${product.title}&url=https://artistro-clone-924622.vercel.app/products/${product.handle}`}
        >
          <FaTwitter className="text-blue-800 text-lg" />
        </a>
        {/* "//pinterest.com/pin/create/button/?url=https://paintigo.com/products/paintigo-premium-acrylic-pens&description=Paintigo%20Premium%20Acrylic%20Pens" */}
        <a
          href={`//pinterest.com/pin/create/button/?url=https://artistro-clone-924622.vercel.app/products/${product.handle}&description=${product.title}`}
          >
          <FaPinterest className="text-blue-800 text-lg" />
        </a>
      </div>

      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
