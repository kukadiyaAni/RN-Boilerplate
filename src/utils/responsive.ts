// src/services/responsive.ts
import { Dimensions, Platform, ScaledSize } from 'react-native';

// Get correct dimension type per platform
const dimensionType =
  Platform.select<'screen' | 'window'>({
    ios: 'screen',
    android: 'window',
  }) || 'window';

// Extract initial dimensions
const { width: INITIAL_WIDTH, height: INITIAL_HEIGHT }: ScaledSize =
  Dimensions.get(dimensionType);

// Adjust WIDTH and HEIGHT so orientation doesn't break layout
export const SCREEN_WIDTH =
  INITIAL_WIDTH > INITIAL_HEIGHT ? INITIAL_HEIGHT : INITIAL_WIDTH;
export const SCREEN_HEIGHT =
  INITIAL_WIDTH > INITIAL_HEIGHT ? INITIAL_WIDTH : INITIAL_HEIGHT;

/**
 * Scale utility
 */
const scale = (size: number, baseWidth: number): number =>
  (SCREEN_WIDTH / baseWidth) * size;

/**
 * Height percentage based on iPhone X height reference (812)
 */
export const hp = (size: number): number => (SCREEN_HEIGHT / 812) * size;

/**
 * Width scaling relative to base screen width (375)
 */
export const wp = (size: number): number => size + (scale(size, 375) - size);

/**
 * Font scaling using vertical scale
 */
export const fontSize = (value: number): number => hp(value);

