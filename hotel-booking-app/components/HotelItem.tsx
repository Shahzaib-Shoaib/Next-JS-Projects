import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

function HotelItem(props: any) {

  return (
   
    <Link href={`allHotels/${props.id}`}>
          <a className="group">
            <div className="w-full bg-gray-200 rounded-3xl overflow-hidden ">
              <div className="relative object-fill group-hover:opacity-75 h-72 ">
                <Image src={props.images} alt={props.title} layout="fill" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {props.images}
            </h3>
            <p className="mt-1 text-sm text-gray-700">{props.address}</p>
            <p className="mt-1 text-sm text-gray-700">${props.price}</p>
          </a>
          </Link>
  );
}

export default HotelItem;
