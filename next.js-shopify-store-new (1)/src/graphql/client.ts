import {GraphQLClient} from 'graphql-request';

//const client = async ({query, variables} : any) => {
  const client = async (query: string, variables = {} ) => {  
    const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    const graphQLClient = new GraphQLClient(
        endpoint,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
          },
        }
      );
   return await graphQLClient.request(query, variables);

   
}


export default client;