// src/api/instance.ts
import axios, { AxiosInstance } from 'axios';
import { Platform } from 'react-native';
import { ENV } from '@config/env'; // your env wrapper
import { store } from '@store/index'; // Redux store
import { logout } from '@store/authSlice'; // logout action

const baseURL = ENV.api.serverUrl;

function createBaseInstance(contentType: string): AxiosInstance {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': contentType,
      'X-MGR-PLATFORM-VERSION': String(Platform.Version),
      'X-MGR-PLATFORM': Platform.OS,
    },
    timeout: 15000,
  });
}

// JSON instance with auth
export const instanceWithAuthHeader = createBaseInstance('application/json');

// JSON instance without auth
export const instanceWithoutAuthHeader = createBaseInstance('application/json');

// attach auth token via interceptor (for the *auth* instances)
const attachAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(config => {
    const state = store.getState();
    const token = state.auth.token; // from Redux

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  });

  instance.interceptors.response.use(
    res => res,
    err => {
      const status = err?.response?.status;
      if (status === 401 || status === 404) {
        store.dispatch(logout());
      }
      return Promise.reject(err);
    },
  );
};

// apply auth interceptors to the auth instances
attachAuthInterceptor(instanceWithAuthHeader);
