import { QueryOptionsType, Dietary } from '../types';
import http from '../utils/http';
import { API_ENDPOINTS } from '../utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchDietary = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.DIETARY);
  return { dietary: { data: data as Dietary[] } };
};
export const useDietaryQuery = (options: QueryOptionsType) => {
  return useQuery<{ dietary: { data: Dietary[] } }, Error>(
    [API_ENDPOINTS.DIETARY, options],
    fetchDietary
  );
};
