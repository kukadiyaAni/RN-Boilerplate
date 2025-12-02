// src/api/http.ts
import { instanceWithAuthHeader, instanceWithoutAuthHeader } from './instance';
import type { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

function handleResponse<T = any>(response: AxiosResponse<T>): T {
  return response.data;
}

function handleError(error: AxiosError | any) {
  const authorizationError = error?.response?.data?.errors?.authorization;

  //   if (!authorizationError) {
  //     Sentry.captureMessage(`Api error: ${String(error)}`);
  //   }

  // You can choose: return vs throw
  // Your old helper returned error — I prefer throw in boilerplate
  throw error;
}

export const Http = {
  // GET with auth (no params)
  get: async <T = any>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await instanceWithAuthHeader.get<T>(url, config);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // GET with auth + raw data (arraybuffer)
  getWithRawData: async (url: string) => {
    try {
      const response = await instanceWithAuthHeader.get(url, {
        responseType: 'arraybuffer',
        headers: {
          Accept: '*/*',
        },
      });
      return response;
    } catch (error) {
      return handleError(error);
    }
  },

  // GET with auth + query params
  getWithAuthParam: async <T = any>(
    url: string,
    params?: Record<string, any>,
  ) => {
    try {
      const response = await instanceWithAuthHeader.get<T>(url, { params });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // GET without auth
  getWithoutAuth: async <T = any>(
    url: string,
    params?: Record<string, any>,
  ) => {
    try {
      const response = await instanceWithoutAuthHeader.get<T>(url, { params });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // POST with auth
  post: async <T = any>(url: string, payload?: any) => {
    try {
      const response = await instanceWithAuthHeader.post<T>(url, payload);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // POST without auth
  postWithoutAuth: async <T = any>(url: string, payload?: any) => {
    try {
      const response = await instanceWithoutAuthHeader.post<T>(url, payload);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // PUT with auth
  put: async <T = any>(url: string, payload?: any) => {
    try {
      const response = await instanceWithAuthHeader.put<T>(url, payload);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // PUT without auth
  putWithoutAuth: async <T = any>(url: string, payload?: any) => {
    try {
      const response = await instanceWithoutAuthHeader.put<T>(url, payload);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // DELETE with auth + query params
  deleteWithAuthParam: async <T = any>(
    url: string,
    params?: Record<string, any>,
  ) => {
    try {
      const response = await instanceWithAuthHeader.delete<T>(url, {
        params,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // PATCH with auth
  patch: async <T = any>(url: string, payload?: any) => {
    try {
      const response = await instanceWithAuthHeader.patch<T>(url, payload);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};
