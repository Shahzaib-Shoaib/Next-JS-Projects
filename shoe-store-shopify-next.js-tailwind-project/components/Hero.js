/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>{" "}
          <div className='relative pt-6 px-4 sm:px-6 lg:px-8'></div>{" "}
          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>Data to enrich your</span>{" "}
                <span className='block text-indigo-600 xl:inline'>
                  online business
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Get started
                  </a>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://raw.githubusercontent.com/Shahzaib-Shoaib/Axiom-FSD-Module-1/main/Module-B/shoe-store-shopify-next.js-tailwind-project/assets/Sample%2021.png'
          alt=''
        />
      </div>
    </div>
  );
}

// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

// export default function Example() {
//   return (
//     <div className='relative bg-white overflow-hidden'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
//           <svg
//             className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
//             fill='currentColor'
//             viewBox='0 0 100 100'
//             preserveAspectRatio='none'
//             aria-hidden='true'
//           >
//             <polygon points='50,0 100,0 50,100 0,100' />
//           </svg>

//           <Popover>
//             <div className='relative pt-6 px-4 sm:px-6 lg:px-8'></div>{" "}
//             <Transition
//               as={Fragment}
//               enter='duration-150 ease-out'
//               enterFrom='opacity-0 scale-95'
//               enterTo='opacity-100 scale-100'
//               leave='duration-100 ease-in'
//               leaveFrom='opacity-100 scale-100'
//               leaveTo='opacity-0 scale-95'
//             >
//               <Popover.Panel
//                 focus
//                 className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
//               >
//                 <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
//                   <div className='px-5 pt-4 flex items-center justify-between'>
//                     <div>
//                       <img
//                         className='h-8 w-auto'
//                         src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                         alt=''
//                       />
//                     </div>
//                     <div className='-mr-2'>
//                       <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
//                         <span className='sr-only'>Close main menu</span>
//                         <XIcon className='h-6 w-6' aria-hidden='true' />
//                       </Popover.Button>
//                     </div>
//                   </div>

//                   <a
//                     href='#'
//                     className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>

//           <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
//             <div className='sm:text-center lg:text-left'>
//               <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
//                 <span className='block xl:inline'>
//                   Premium{" "}
//                   <span className='block  bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 xl:inline'>
//                     Dish Washing
//                   </span>{" "}
//                   Towels
//                 </span>{" "}
//               </h1>
//               <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
//                 BerryBerri is high quality absorbing reusable dish washing
//                 cloth.
//                 <br />
//                 <br />
//                 With a variety of colors, choose the perfect shade to match your
//                 kitchenware.
//               </p>
//               <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
//                 <div className='rounded-md shadow'>
//                   <a
//                     href='#'
//                     className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
//                   >
//                     Get started
//                   </a>
//                 </div>
//                 <div className='mt-3 sm:mt-0 sm:ml-3'>
//                   <a
//                     href='#'
//                     className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
//                   >
//                     Live demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//       <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
//         <img
//           className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
//           src='https://cdn.shopify.com/s/files/1/0450/0170/3576/files/Solid-Diamond-_Weave-Kitchen-_Towel_720x.jpg?v=1596796209'
//           alt=''
//         />
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function Hero() {
//   return (
//     <div className='my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center'>
//       <h1 className='font-extrabold text-gray-900'>
//         <p className='text-xl sm:text-3xl md:text-4xl'>Fester</p>
//         <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl'>
//           Ecommerce Store
//         </p>
//       </h1>
//       <h2 className='mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl '>
//         Build the eCommerce Revolution.
//       </h2>
//       <div className='mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8'>
//         <Link href='#'>
//           <a className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800'>
//             Enroll Now
//           </a>
//         </Link>
//         <Link href='#'>
//           <a className='inline-flex items-center font-semibold text-gray-900 hover:text-gray-800'>
//             Learn More
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }
