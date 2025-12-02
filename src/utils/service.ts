// src/services/utils.service.ts
import dayjs from 'dayjs';
/**
 * Remove all symbols and only keep numbers/letters
 * Example: removeSymbols("@A#n*i!123") → "Ani123"
 */
export function removeSymbols(str: string = ''): string {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Remove everything except numbers
 * Example: onlyNumbers("+1 (800) 555-1212") → "18005551212"
 */
export function onlyNumbers(str: string = ''): string {
  return str.replace(/[^\d]/g, '');
}

/**
 * Convert UNIX timestamp (seconds or ms) → JS Date
 */
export function parseUnix(unix: number | string): Date {
  let ts = Number(unix);
  if (String(unix).length === 10) ts *= 1000; // convert seconds → ms
  return new Date(ts);
}

export function getFormattedDate(
  unix: number | string,
  format: string = 'DD/MM/YYYY',
): string {
  const ts = Number(unix);
  const ms = String(unix).length === 10 ? ts * 1000 : ts;
  return dayjs(ms).format(format);
}
/**
 * Capitalize first letter
 */
export function capitalize(str: string = ''): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Simple email validation
 */
export function isValidEmail(str: string): boolean {
  return /\S+@\S+\.\S+/.test(str);
}

/**
 * Debounce (delay function execution)
 */
export function debounce(func: Function, delay: number) {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
