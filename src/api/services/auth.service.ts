import { Http } from '@api/http';
import { API_ENDPOINTS } from '@constants/endpoint';

export function login(params: any) {
  return Http.postWithoutAuth(API_ENDPOINTS.LOGIN, params);
}
