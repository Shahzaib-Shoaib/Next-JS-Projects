// import { QueryOptionsType, Brand } from '../types';
// import { API_ENDPOINTS } from '../utils/api-endpoints';
// import http from '../utils/http';
// import { useQuery} from 'react-query';

// export const fetchBrands = async ({ queryKey }: any) => {
//   const [_key, _params] = queryKey;
//   const {
//     data: { data },
//   } = await http.get(API_ENDPOINTS.BRANDS);
//   return { brands: { data: data as Brand[] } };
// };
// export const useBrandsQuery = (options: QueryOptionsType) => {
//   return useQuery<{ brands: { data: Brand[] } }, Error>(
//     [API_ENDPOINTS.BRANDS, options],
//     fetchBrands
//   );
// };

import { QueryOptionsType, Brand } from '@framework/types'
import http from '@framework/utils/http'
import { API_ENDPOINTS } from '@framework/utils/api-endpoints'
import { useQuery } from 'react-query'

export const fetchBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey
  const { data } = await http.get(API_ENDPOINTS.BRANDS)
  return data
}
export const useBrandsQuery = (options: QueryOptionsType) => {
  return useQuery<
    { brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] },
    Error
  >([API_ENDPOINTS.BRANDS, options], fetchBrands)
}
