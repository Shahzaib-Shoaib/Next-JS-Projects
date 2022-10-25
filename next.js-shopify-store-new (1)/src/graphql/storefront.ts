  const storefront = async (query: string, variables = {} ) => {
  
  const URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;
    
   
    const options = {
      method: 'POST',
      headers: {
        "X-Shopify-Storefront-Access-Token": `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    };
  
    try {
      const data = await fetch(URL, options).then((response) => {
        return response.json();
      });
      return data;
    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  }
  export default storefront;