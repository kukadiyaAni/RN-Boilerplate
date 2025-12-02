// App-level constants
export const APP_NAME = 'RN Boilerplate';
export const API_TIMEOUT = 15000;

// AsyncStorage keys / secure storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
} as const;

// Common numeric configs
export const PAGINATION = {
  PAGE_SIZE: 20,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Something went wrong. Please check your internet connection.',
  UNKNOWN_ERROR: 'Something went wrong. Please try again.',
} as const;
