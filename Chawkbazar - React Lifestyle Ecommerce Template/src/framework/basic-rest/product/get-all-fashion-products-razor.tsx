// razor
import { QueryOptionsType, Product } from '../types';
import http from '../utils/http';
import { API_ENDPOINTS } from '../utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchFashionProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.FASHION_PRODUCTS);
  return data as Product[];
};
export const usefashionProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.FASHION_PRODUCTS, options],
      fetchFashionProducts
  );
};
