export async function storefront(query: string, variables = {}) {
  const URL = `https://bigbenflowers.myshopify.com/api/2022-10/graphql.json`;
//const URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2022-10/graphql.json`;
  
  
  const options = {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': '5b7418b1a31861371b2deb1da1d804b6',
      //'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_ACCESS_TOKEN,
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

export function formatPrice(number:any) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}


/*
export async function storefront(query, variables = {}) {
  const response = await fetch(
   // "https://belatedbicycles.myshopify.com/api/2022-07/graphql.json",
   "https://bigbenflowers.myshopify.com/api/2022-07/graphql.json",
   
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  return response.json();
}

export function formatPrice(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
*/