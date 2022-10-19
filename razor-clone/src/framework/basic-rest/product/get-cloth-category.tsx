import { QueryOptionsType, Category } from '../types';
import http from '../utils/http';
import { API_ENDPOINTS } from '../utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchClothtablesCategory = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.CLOTH_CATEGORY);
  return data as Category[];
};
export const useClothCategoryQuery = (options: QueryOptionsType) => {
  return useQuery<Category[], Error>(
    [API_ENDPOINTS.CLOTH_CATEGORY, options],
      fetchClothtablesCategory
  );
};
