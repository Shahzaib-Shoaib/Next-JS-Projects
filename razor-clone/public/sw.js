if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>a(e,r),d={module:{uri:r},exports:n,require:o};s[r]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PKOkqolHdu03rXKHR7TR1/_buildManifest.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/PKOkqolHdu03rXKHR7TR1/_ssgManifest.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/0c428ae2-f62b8bea5a41aa0b3f09.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/1265.8fc82e0ec172952db5b1.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/1609-dc146b18abc772ff501e.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/1627-c47f30668e488c196c97.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/1a48c3c1.27e0e339906c8ff40f41.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/1bfc9850-fd25309f5980807319bf.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/2051.18784f4d9c5819cffb9f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/2227-b6ce47f347a836c86085.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/2260.695ff6cda10ba0b536b0.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/2396.4ff29214b7965745309c.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/252f366e-17d28b358f8fc0e65406.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/3028-27c5a9b8abdcea6dfcdf.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/31664189-ecc1ea7b83cbb451d8f9.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/3487-82fcc538777a7f531013.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/3642.15d1693366aded9fd4f2.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/372-8f7b3c7918830796f9b6.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/3808-1a0eb1da77f4dc6a68d2.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/3941-e8d64060c1a8e2e82022.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/3945.2c3eeec551d7785916ff.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/4148.3ad636f13f3673a53967.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/4859-55795b705de6d27f6aac.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/5122.c4146f7e80f36666a96c.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/5134-918552097e2dcb9cb97a.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/5491-b2d999981ec8a431dd43.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/6261-2c0e438c0b18fca9136f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/632cba62-7f22f7f33331398aea24.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/6425-3b4389d381c41c7d41fe.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/6728d85a-82612afd9c491ed32ea2.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/6956.a572abd3724c4119c281.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/6966-11d6e79ec49314b4b679.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/7061.c77cc4b2529be8e131cc.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/7d0bf13e-87f07a78c6201dec1130.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/821-444859e3c9dea8deeb55.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/8225.353a2300416b3e45ec1c.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/823-12b36e6927e47cfa36c3.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/8401-3368b8350315a2968dee.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/8607-881eef35e034ef79ba03.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/9045.391dfefc1b3f1059c865.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/9171.0e933ff5a60d0f22b0f9.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/9190-e92f28fbf756cb3be7d0.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/9436.03666d52aa31701c5f63.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/95-61f8c9ea6c01df48b77e.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/95b64a6e-9888bb68bee15ddf3fb1.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/9702-f375e4b97c81979b8a4c.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/ae51ba48-f49fcf05a77ba56c48a1.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/commons-60913f797fe6777c34aa.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/d7eeaac4-969db3a5b907aa74da21.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/de71a805-de90953a370dae281ccb.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/framework-e12e56e0b8a76d261551.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/main-2a5969bfc1175a89302c.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/404-9a66f0a81c71172e24dd.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/_app-7f8159d9402c84e9f3d0.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/_error-cd3a4dcc303cc09fa80f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog-8cb46c5bc1b67978459a.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-206edb0f5538cbb147f8.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog/blog-category-big-26489a0f1b5712dacbea.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog/blog-category-grid-0d72936da2b7f217d28f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog/blog-category-list-fecb716e22f5f5772aa1.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog/blog-post-left-ca2c9d8c3978a4b9e956.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/blog/blog-post-right-e52e71b3de18d22abfac.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/bundles/%5Bslug%5D-894ef41a7beb54a18d18.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/checkout-0893e6212b6ab58c8ea5.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/complete-order-50b57a8c32cda9d2c92e.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/contact-us-94d909c6642d2c0cacc0.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/faq-e793aaac997c5e58d68b.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/home2-6576a910d854b30f888a.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/home3-bd9aab5221558b88810d.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/index-78e9c3ee1ce155d8d9e0.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account-3306b54b4cb76766cb2f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/account-settings-bcf8224b1e6e113c10bd.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/address-deb4e33d14aa65a9b666.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/change-password-8a14d79b32622aabe773.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/help-center-d14da534fac278287f31.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/legal-notice-9f07146dbdd86d4c93ff.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/notification-bf2ec7210a87f3bb7015.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/orders-16ac54e0c002d17bbf7c.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/orders/%5Bid%5D-755c254826975d5d0ba0.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/payment-07f755fd103149629858.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/my-account/wishlist-5e8af47ca1b785fbb30a.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/privacy-dea3bb8a5b21baa66994.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/products-ff7664dd5047f3ec6c53.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/products/%5Bslug%5D-c04e8e63a187689ef188.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/search-27d333329333f6bf44cd.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/shops-b426d0bd61bf9c3b87ce.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/shops/%5Bslug%5D-5b84b9f65ccb8d78346f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/signin-c2e6a6e60af1a3da072f.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/signup-1d4b53c92349126780ba.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/pages/terms-399d371d59443cbd18bc.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/chunks/webpack-81e9b619c93f8dfdbe12.js",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/51ff7ed03a17cee8970c.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/5de320f6f8258d5bb0c3.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/6088ef409638b92223b9.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/6b3d2abe8d3e8223e197.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/baa546777c7a147db85b.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/d03876280af1bfac7b8c.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/de4a73f4e286f0ebe9a9.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/css/e21741eab10f79ced0c0.css",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/image/src/assets/placeholders/category.be57a63eafc5e84e2a28be549dd8d6d3.png",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/image/src/assets/placeholders/collection.99f1ba22f0278e55b1220e946688a6da.svg",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/image/src/assets/placeholders/product-placeholder.57fb6787e9708431e78844ec86690b34.png",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/image/src/assets/placeholders/product.b26354bac935f7af6a19c54e7e8c81f6.png",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/_next/static/image/src/assets/placeholders/search-product.791e7033ae7df5417af4c726dd8cb90c.png",revision:"PKOkqolHdu03rXKHR7TR1"},{url:"/api/address.json",revision:"837a517dacf5466b838a7512025f1b04"},{url:"/api/attribute.json",revision:"0e0e7dd2d12140ff5a4f09dd5e321b3e"},{url:"/api/attributes.json",revision:"c94bfafc49005af8ff209a3baebea5c5"},{url:"/api/blog.json",revision:"3e206cc3419cdc8276a7d08c698fd839"},{url:"/api/blogDetails.json",revision:"c1cd63a3e8fa692997c0c65fd52d824f"},{url:"/api/brands.json",revision:"d9681ac011be40b54f8170102bbad5c2"},{url:"/api/categories.json",revision:"85df724128b13f43ef1cf43e551a3897"},{url:"/api/category_cloth.json",revision:"916159280ef5f41bdc9ee4acc333a19c"},{url:"/api/category_electronic.json",revision:"db529ba89a16794966fa98c7e6e18f8c"},{url:"/api/contact.json",revision:"a649a6aa21ae85c8af21f7f1b0dd63d9"},{url:"/api/dietary.json",revision:"29c48db8483e25df3f72577ab9ab332b"},{url:"/api/login.json",revision:"395fc955723af6952a70cdc7e9224d8c"},{url:"/api/order-status.json",revision:"f20354a773950bf1726e3910ae9c704a"},{url:"/api/order.json",revision:"e9e64fff0485756efb6753e44883fa6f"},{url:"/api/orders.json",revision:"8d26109515cd398c025f599469c341cd"},{url:"/api/password_change_response.json",revision:"14438c85dcc221611a2c671f910a9dac"},{url:"/api/payment.json",revision:"769798ad86be8ff051b0cb2bd8f78b76"},{url:"/api/product.json",revision:"a70d1d02953e2036fc2a29afaebaaebd"},{url:"/api/products.json",revision:"5569db9cd69d878efc35c10a639b9728"},{url:"/api/products_best_seller.json",revision:"de37cc1fb8e6c5e4dd5f97879194ad69"},{url:"/api/products_electronic.json",revision:"2e5ca33db42d145e199891a2d576ba0c"},{url:"/api/products_fashion.json",revision:"8a56cb968fe6b7dbe7f82c79e05eab8b"},{url:"/api/products_new_arrival.json",revision:"321aecfed7dedff72a053b5e880c22eb"},{url:"/api/products_popular.json",revision:"a787777ca9a09a64291bb4a536326688"},{url:"/api/register.json",revision:"bc6374d4bfc8f10fd32c1ae1d4d9f7d3"},{url:"/api/related_products.json",revision:"df314a14694c103a1b08f758a0b343a7"},{url:"/api/search.json",revision:"2e3f56bfcf35e40f7d236dc93a483720"},{url:"/api/shop.json",revision:"f17c7208a7028dd5249767869dafd935"},{url:"/api/shops.json",revision:"f9e189086b7985ac5d3645a2c7f85bbd"},{url:"/api/wishlist.json",revision:"73ac0a9a7997bb45d3ca728f011e1424"},{url:"/assets/images/404.png",revision:"140b4c7e09c9434bf07412b69860194f"},{url:"/assets/images/404.svg",revision:"8b0b5dc7fb326cd127dfea76eb5a87dc"},{url:"/assets/images/Card.png",revision:"9e703538f34e513eff42888ba8f09e52"},{url:"/assets/images/app-bg.png",revision:"e2285e650959c6d29108f10a87a31605"},{url:"/assets/images/app-store.png",revision:"d6a6efde24a597a371e6cbd0fd5ed6a1"},{url:"/assets/images/banner/banner-1.jpg",revision:"d3cf5ec8392231191730aa1c8b24c35c"},{url:"/assets/images/banner/banner-2.jpg",revision:"8e5754d88673de27f2c3942fe6e9a040"},{url:"/assets/images/banner/banner-3.jpg",revision:"0af1eec5ee2f9d28e92a3f91713d6d90"},{url:"/assets/images/banner/banner-4.jpg",revision:"2a77a7188178eb5ce3aafcaa330711ba"},{url:"/assets/images/banner/brand/banner-1.jpg",revision:"ae19308962a7e2643633b822edcbb1f4"},{url:"/assets/images/banner/brand/banner-2.jpg",revision:"e902f3b21c147d55779040e0ad2b47db"},{url:"/assets/images/banner/brand/banner-3.jpg",revision:"0574f4a9185c3ea22e1d9a271572c7ed"},{url:"/assets/images/banner/brand/banner-4.jpg",revision:"9134766284d6a0093bd56dba835b9124"},{url:"/assets/images/banner/brand/banner-5.jpg",revision:"83bf214fc040224e978601a79d629c20"},{url:"/assets/images/banner/brand/banner-6.jpg",revision:"e902f3b21c147d55779040e0ad2b47db"},{url:"/assets/images/banner/home2/banner3.jpg",revision:"e15ba725eeb7e2d0ee456c923c73a6eb"},{url:"/assets/images/banner/home2/banner4.jpg",revision:"9ceb05c8ee62628f1e972fe57fe89f14"},{url:"/assets/images/banner/home2/banner5.jpg",revision:"57819fe4ca5ed58143d816054c24e0bb"},{url:"/assets/images/banner/home2/banner_bottom.jpg",revision:"d10a8c415dbf14966124462329861328"},{url:"/assets/images/banner/home2/banner_left_1.jpg",revision:"0007de3ec761174c4c065d1a6744abdb"},{url:"/assets/images/banner/home2/banner_mid_1.jpg",revision:"afbefce756685de0d5849b4d8f3e8002"},{url:"/assets/images/banner/home2/banner_mid_2.jpg",revision:"098aa2000282fe2dcc104708b9e21f27"},{url:"/assets/images/banner/home2/banner_mid_3.jpg",revision:"5b26377bc0ee8ed7f342f8bb749a7b87"},{url:"/assets/images/banner/home2/banner_mid_4.jpg",revision:"6c2c73be4785131bca84552da3918701"},{url:"/assets/images/banner/home3/bannerHeroSlider_1.png",revision:"6dd5e444f829560f88283a835d4f7991"},{url:"/assets/images/banner/home3/bannerHeroSlider_2.png",revision:"21b14236f9dc0fe11a5a19f11abfcf90"},{url:"/assets/images/blog/blog-1.png",revision:"7adc21cf1296cc2ed55783689260bf74"},{url:"/assets/images/blog/blog-2.png",revision:"43caf3e96d0c0d986e0f7b76be2e0b19"},{url:"/assets/images/blog/blog-3.png",revision:"b0fb3691abf0dfe99a78e3e8f9e9653f"},{url:"/assets/images/blog/blog-4.png",revision:"4e7b1cea9ec1ecbfd80e5b65a99db1bf"},{url:"/assets/images/blog/blog-5.png",revision:"e7d1592da336e6309b46308e50aba34b"},{url:"/assets/images/blog/blog-6.png",revision:"eb3b4838fa061880b430d030443355a2"},{url:"/assets/images/blog/blog-7.png",revision:"c79055dcc4f0fc57a4ef21e4032fab32"},{url:"/assets/images/blog/blog-8.png",revision:"e0b751fe474ad7c3d349a6214ad3ee2c"},{url:"/assets/images/blog/blog-9.png",revision:"57c47def2be421972df00265eb00d23f"},{url:"/assets/images/category/collection_1.jpg",revision:"1556be146aa771df5f09cd8b52c34a44"},{url:"/assets/images/category/collection_2.jpg",revision:"f53a6297ec46df2286a6e975e543cc7e"},{url:"/assets/images/category/collection_3.jpg",revision:"0af4775ffa550f253396db5bc07099c3"},{url:"/assets/images/category/collection_4.jpg",revision:"bf79aae395e408a6b452b4a1e2880980"},{url:"/assets/images/category/collection_5.jpg",revision:"751494f6a9e14fa6a83f0bff93283a64"},{url:"/assets/images/category/collection_6.jpg",revision:"d4e5f8ad5039829b82b031ad001aa212"},{url:"/assets/images/collection/1.png",revision:"9b414b84b4df3e76e485e4ffa2225e2a"},{url:"/assets/images/collection/2.png",revision:"952c3be3551f506eab248d8e02bd5ec3"},{url:"/assets/images/collection/3.png",revision:"eda8335bd2a97feefcc1e99ff9df25d7"},{url:"/assets/images/collection/4.png",revision:"b3ab4f507b011f463e4d69819770013e"},{url:"/assets/images/collection/cate_1.jpg",revision:"2192ded8ec85cc69261761da1e6ff323"},{url:"/assets/images/collection/cate_1_rtl.jpg",revision:"df8520a76f01adb500b6582fe49497ec"},{url:"/assets/images/collection/cate_2.jpg",revision:"b1c9d65dd01b3f6bc5289d6af24a542d"},{url:"/assets/images/collection/cate_2_rtl.jpg",revision:"d3ff6da399bdf11449cc41e70d826d7e"},{url:"/assets/images/delivery-box.svg",revision:"c31ae3008fc5d14b46e5e2ed487e0298"},{url:"/assets/images/hero/home2/slide_show1.jpg",revision:"467257f66ff1a562281c0ed7e8100d15"},{url:"/assets/images/hero/home2/slide_show2.jpg",revision:"ab7e122edb111cddf98c4687f2b67534"},{url:"/assets/images/hero/home2/slide_show3.jpg",revision:"12f8c08133b4eb3f431b1688fb92bf3d"},{url:"/assets/images/hero/home3/slider_1.png",revision:"8b68427cd4de2b4b3ca04fe44b687c45"},{url:"/assets/images/hero/home3/slider_2.png",revision:"5cfe225337777599dc7b36ce250f0fa8"},{url:"/assets/images/hero/home3/slider_3.png",revision:"cdf861f449d5f65fdafd874ac6a6d9fe"},{url:"/assets/images/hero/slider_1.jpg",revision:"f2d8217399680373f0d6d3904dd674e9"},{url:"/assets/images/hero/slider_2.jpg",revision:"c9bddb43706c59de7945dd3e2c597a77"},{url:"/assets/images/icon-phone.png",revision:"acaf386f0903bf9e89ffeabef89f89f2"},{url:"/assets/images/indicator-2.png",revision:"18b5de3c64e56a2ad2280fe24989dd99"},{url:"/assets/images/indicator.png",revision:"794f2ff0291502eaab60d93971b59059"},{url:"/assets/images/login.jpg",revision:"50ecc4a79febebfd1a58b153244fb0d3"},{url:"/assets/images/logo.png",revision:"88706d92dbe69d15180346d9a2cedac7"},{url:"/assets/images/mega/banner-menu.jpg",revision:"11ab4300281f17f23d5085ba28c66e94"},{url:"/assets/images/not-found-alt.svg",revision:"3a572e0c7f191d5ece5e89a796f30016"},{url:"/assets/images/payment/american_logo.svg",revision:"90115975c058d9bf1a1765eba679ede9"},{url:"/assets/images/payment/discover.svg",revision:"c17bcbe660cbed62ba1d8386edf4613e"},{url:"/assets/images/payment/jcb.svg",revision:"74c38e96fade8ce65e4cfc2600fa4110"},{url:"/assets/images/payment/mastercard.svg",revision:"1d05209b0c39a47f04d0519d8127a265"},{url:"/assets/images/payment/paypal.svg",revision:"295b7d1835e81f05a2bf2b4b223a7b31"},{url:"/assets/images/payment/skrill.svg",revision:"c22e3df25116c39f8bcb3caad18f5440"},{url:"/assets/images/payment/visa.svg",revision:"5acff98f65037fad8400d57b96081a54"},{url:"/assets/images/pin.png",revision:"d4ce101c06bcda5ac50f76ffadcdc818"},{url:"/assets/images/play-store.png",revision:"776b0acb3782bb73afc181e9fd6191eb"},{url:"/assets/images/products/16-1.jpg",revision:"e707ec54f7f2ae92306fd63a31d82054"},{url:"/assets/images/products/16.jpg",revision:"20c40116fa9ed1063d95cd7a008f0b79"},{url:"/assets/images/products/p-1-1.jpg",revision:"0ea95c5d8244341b1d3c7594c0800058"},{url:"/assets/images/products/p-1.jpg",revision:"56c9e8f7bd5fb960b48d607c2fc20311"},{url:"/assets/images/products/p-10-1.jpg",revision:"3348c4e4fb6544fc5b670833be510be8"},{url:"/assets/images/products/p-10.jpg",revision:"89886ac5f154d91fc9dc33217f03d28c"},{url:"/assets/images/products/p-11-1.jpg",revision:"9eb4d1802e70d1fd6a28330675041f72"},{url:"/assets/images/products/p-11.jpg",revision:"232566c29ace11c5c5466443b3d0954f"},{url:"/assets/images/products/p-12-1.jpg",revision:"c3432ef6a6138f65802248c754426994"},{url:"/assets/images/products/p-12.jpg",revision:"8cfc5ff0e04f8c995db96de2d7c8c418"},{url:"/assets/images/products/p-13-1.jpg",revision:"018c4f7d70244662e5b60c3804b61767"},{url:"/assets/images/products/p-13.jpg",revision:"737f944978e1dd65a1004f7f46f7a309"},{url:"/assets/images/products/p-14-1.jpg",revision:"d00b782ddac63c8e3e1eca562151df72"},{url:"/assets/images/products/p-14.jpg",revision:"28062b9cdb261e9affb8d34e5ad76f5d"},{url:"/assets/images/products/p-15-1.jpg",revision:"f38e0170f45abb5e84b0e75300f5d1a6"},{url:"/assets/images/products/p-15.jpg",revision:"fa285601de33d0bf048fdd026bc8ef5a"},{url:"/assets/images/products/p-2-1.jpg",revision:"f59cfb7f428fe6ba4d0f81b963d354ea"},{url:"/assets/images/products/p-2.jpg",revision:"bb605f3f3ba788a11ae98669d7631136"},{url:"/assets/images/products/p-3-1.jpg",revision:"545ba4bef3df048ed810c17921825a60"},{url:"/assets/images/products/p-3-2.jpg",revision:"a862f9145df5698d9248f89644056bbd"},{url:"/assets/images/products/p-3-3.jpg",revision:"84555305ee23c0cef737f17f93e0c631"},{url:"/assets/images/products/p-3.jpg",revision:"41d6cd0dcbd0e5fc9d5be7a0cb4f6067"},{url:"/assets/images/products/p-4-1.jpg",revision:"65ab8cef6c0487471b9345c06f863a38"},{url:"/assets/images/products/p-4.jpg",revision:"31c1cef63d38ab37bf8b2ef46c71f4a1"},{url:"/assets/images/products/p-5-1.jpg",revision:"c26ea63f99cac6d2a02a9e7505447acd"},{url:"/assets/images/products/p-5.jpg",revision:"d08e733ab8b6cb94517037cfd0db0986"},{url:"/assets/images/products/p-6-1.jpg",revision:"3b8f1129bd08e3ffa4dc6b5cc42e283e"},{url:"/assets/images/products/p-6.jpg",revision:"83c898fe15df8773a8772f27ba4412b5"},{url:"/assets/images/products/p-7-1.jpg",revision:"403a717e64de6e78fd477dd68baad094"},{url:"/assets/images/products/p-7.jpg",revision:"34aa470bfd68f4748242771267a4675b"},{url:"/assets/images/products/p-8-1.jpg",revision:"aaed6827c26ceab162a6409f9432a4ef"},{url:"/assets/images/products/p-8.jpg",revision:"babce7a01f9200ef02035b10d14a6572"},{url:"/assets/images/products/p-8.png",revision:"ebf3c9227063e3ce94ed962cc644da40"},{url:"/assets/images/products/p-9-1.jpg",revision:"143e80acdf0153220bb3f22427a2c3cd"},{url:"/assets/images/products/p-9.jpg",revision:"5b6ac2d9a6612a39d5cc5aa9ae2139b9"},{url:"/assets/images/shop/shop-banner-1.jpg",revision:"d2e739d276d801d18af080792271ee5e"},{url:"/assets/images/shop/shop-banner-mobile-1.png",revision:"e1d3f726349e78e009332472d5eaa431"},{url:"/assets/images/shop/shop-logo-1.jpg",revision:"fb8e0cfb8412b8577c7e8e115985d5c1"},{url:"/assets/images/shop/shop-logo-2.jpg",revision:"64d48ecb624502e2803f4d9257337a32"},{url:"/assets/images/shop/shop-logo-3.jpg",revision:"c07ff11e5eeea31af54465307d51bf2b"},{url:"/assets/images/shop/shop-logo-4.jpg",revision:"39f063fc546cdfb3cfe22b5688763fde"},{url:"/assets/images/shop/shop-logo-5.jpg",revision:"1b61293a2445a6f6111f0c8269cf873f"},{url:"/assets/images/shop/shop-logo-6.jpg",revision:"7470f8ac9c9ef20b52a3119c61f98c6a"},{url:"/assets/images/social/facebook.svg",revision:"23907570ad01951328b3aaf6d1dd5f3c"},{url:"/assets/images/social/instagram.svg",revision:"dd16ec602b27bf10ad4d5678a4f3ad7a"},{url:"/assets/images/social/twitter.svg",revision:"23f7b209704588c6452f345496bbc926"},{url:"/assets/images/social/youtube.svg",revision:"b112df8ef7011c8cbc881a275efc0295"},{url:"/assets/images/support/1.jpg",revision:"5e5edbc6a2c738a7545693257de74a29"},{url:"/assets/images/support/2.jpg",revision:"bac0d20fd3bfcffecb1f733b441459a4"},{url:"/assets/images/support/3.jpg",revision:"c0ddcae1c19a468b5978f1cfa7f102be"},{url:"/assets/placeholder/category-small.svg",revision:"6a580f4ab83362e9f3f5c2a416e4d68d"},{url:"/favicon.ico",revision:"3fb44a6ff5032b7ebefe73eed6414f7a"},{url:"/icons/apple-icon-180.png",revision:"1aec474f3b953e2d2e0c9432ef8ec2eb"},{url:"/icons/manifest-icon-192.png",revision:"9a9f22ef1308d200754273e8f7f0ceee"},{url:"/icons/manifest-icon-512.png",revision:"02a7df6c060937222029a35a475967a1"},{url:"/locales/ar/about.json",revision:"08e43fcddfb5eae0a1cea18abd627341"},{url:"/locales/ar/common.json",revision:"a7027743e8b8a66bdf318972267b56d7"},{url:"/locales/ar/faq.json",revision:"254ca5f9ef95c6c887d0bee5ac9c5d0c"},{url:"/locales/ar/footer.json",revision:"94f18b1d49a7ea1c19e515524e383ed8"},{url:"/locales/ar/forms.json",revision:"7ba8c92b33d37a00223d3d37e3613710"},{url:"/locales/ar/help.json",revision:"48df691abf760705f6355d6857503bca"},{url:"/locales/ar/legal.json",revision:"be559fd359b1b72f80cff7c922687036"},{url:"/locales/ar/menu.json",revision:"7d2ca4abc8288140b599f1b0f25432f7"},{url:"/locales/ar/privacy.json",revision:"8fed7f154c2b99661fc46f4fa8fe4199"},{url:"/locales/ar/terms.json",revision:"4712d71fa056e1bbc7803ab44aaf7fe3"},{url:"/locales/de/about.json",revision:"58bc69804a33669a6a263b5dab877eed"},{url:"/locales/de/common.json",revision:"917cdcaba679d9501630e6cdbeb515e4"},{url:"/locales/de/faq.json",revision:"f19132497511f486fa1af49312df5d81"},{url:"/locales/de/footer.json",revision:"423e71de22200c86f3f1c538819c0839"},{url:"/locales/de/forms.json",revision:"3d92b2f9bb52bb1b92df3ae57f0d1696"},{url:"/locales/de/help.json",revision:"ad59af72c825e5649945bf7672bb156f"},{url:"/locales/de/legal.json",revision:"e8596756eedba68fcd87767f06124327"},{url:"/locales/de/menu.json",revision:"7ee31a73fbd38218f641b8c853f03b46"},{url:"/locales/de/privacy.json",revision:"c55e97ee75a96fc7863f22f63941ec20"},{url:"/locales/de/terms.json",revision:"592477fdbc5ac85030a700671675859a"},{url:"/locales/en/about.json",revision:"8f7d7a0318079402027a98f4e386fe87"},{url:"/locales/en/common.json",revision:"791c42f6164700935269acf86c38ce7c"},{url:"/locales/en/faq.json",revision:"678eed12b692902ca327679c62c7ca87"},{url:"/locales/en/footer.json",revision:"5741327a5b7a9729c2ef2d6e28a88045"},{url:"/locales/en/forms.json",revision:"54291526f9d7f8b5b30322c8170855a5"},{url:"/locales/en/help.json",revision:"b8c2260bbbb3319955a77fb0c45253df"},{url:"/locales/en/legal.json",revision:"29d8164536b13530eb1eeaf0794555f4"},{url:"/locales/en/menu.json",revision:"aa54c1606d742fd04a0723e5490ea325"},{url:"/locales/en/privacy.json",revision:"62b5c7a3e31c73c0a396bf8bb54b871d"},{url:"/locales/en/terms.json",revision:"eee8c06570ed055d3d8e46b423735f01"},{url:"/locales/es/about.json",revision:"911d710114d1cbf25431f1c5b20588aa"},{url:"/locales/es/common.json",revision:"c633c929a80109cbbc09791aaccf2fdf"},{url:"/locales/es/faq.json",revision:"b3b8ba436268c97114148a8ab21d5589"},{url:"/locales/es/footer.json",revision:"c6ee7766d966fe3717b4fba7d2c765b7"},{url:"/locales/es/forms.json",revision:"600f65ac2908debb48829beb8027129b"},{url:"/locales/es/help.json",revision:"836e4230af108868d941864e2d37e25d"},{url:"/locales/es/legal.json",revision:"b3cfc78857017e1d3f767bfc109f0ade"},{url:"/locales/es/menu.json",revision:"78bd9e22784035d245010c32473e8d6d"},{url:"/locales/es/privacy.json",revision:"e135b111473b9cf59900898966c61800"},{url:"/locales/es/terms.json",revision:"f3c86939fc1f6b6f5e041d555797b6be"},{url:"/locales/zh/about.json",revision:"08bd4e68e68958792cf04b06e37a2234"},{url:"/locales/zh/common.json",revision:"eb7be610039143c908f097dd35405f59"},{url:"/locales/zh/faq.json",revision:"14ad296d8079a69ade3963ea5d657de3"},{url:"/locales/zh/footer.json",revision:"a3a86003777cb67fb142ccb11ba0264f"},{url:"/locales/zh/forms.json",revision:"222b9615a6936f36806ec777392df2bc"},{url:"/locales/zh/help.json",revision:"8048351aba680a11cc192305274f5f13"},{url:"/locales/zh/legal.json",revision:"215d73e32f32572abbd3e5c6265abf70"},{url:"/locales/zh/menu.json",revision:"bd0266b89e97ba52083d8eff85c9c5f5"},{url:"/locales/zh/privacy.json",revision:"7cd6f4797ec8567c8078a2898ba78eab"},{url:"/locales/zh/terms.json",revision:"719b26c4ec2f112d8f04aee9beeffe3b"},{url:"/manifest.json",revision:"ccaed1ecc92af7618b062bae951dbf76"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
