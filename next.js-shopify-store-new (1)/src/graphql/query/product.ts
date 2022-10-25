import {gql} from "graphql-request";

const productQuery = (handle : any) => {
    const queryArguments = `handle: "${handle}"`;

    return gql`
        {
            productByHandle(${queryArguments}) {
                id
                title
                handle
                description
                descriptionHtml
                options(first: 100) {
                    id
                    name
                    values
                }
                images(first: 1) {
                    edges {
                        node {
                            id
                            originalSrc
                            transformedSrc
                            altText
                        }
                    }
                }
                variants(first: 1) {
                    edges {
                        node {
                            id
                            sku
                            title
                            quantityAvailable
                            compareAtPriceV2 {
                                amount
                            }
                            priceV2 {
                                amount
                            }
                            selectedOptions {
                                name
                                value
                            }
                        }
                    }
                }
               
                tags
                priceRange {
                    minVariantPrice {
                      amount
                    }
                collections(first:100){
                    edges{
                        node{
                            id,
                            handle
                        }
                    }
                }
            }
        }
    `
}



export default productQuery;


// query SingleProduct($handle: String!) {
//     productByHandle(handle: $handle) {
//       title
//       description
//       updatedAt
//       tags
//       priceRange {
//         minVariantPrice {
//           amount
//         }
//       }
//       images(first: 1) {
//         edges {
//           node {
//             transformedSrc
//             altText
//           }
//         }
//       }
//       variants(first: 1) {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   }
// `;
