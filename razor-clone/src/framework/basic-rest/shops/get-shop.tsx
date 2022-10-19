import { Shop } from '../types';
import http from '../utils/http';
import { API_ENDPOINTS } from '../utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchShop = async (_slug: string) => {
  const { data } = await http.get(`${API_ENDPOINTS.SHOP}`);
  return data;
};
export const useShopQuery = (slug: string) => {
  return useQuery<Shop, Error>([API_ENDPOINTS.SHOP, slug], () =>
    fetchShop(slug)
  );
};
