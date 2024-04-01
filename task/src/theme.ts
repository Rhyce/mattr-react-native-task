import { DefaultTheme } from '@react-navigation/native';
import { DimensionValue } from 'react-native';

type ColorName = 'white' | 'black' | 'pink' | 'palePurple' | 'antiFlashWhite';
type FontSizeName = 'small' | 'medium' | 'large' | 'xLarge';
type SpacingName = 'one' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
type BorderRadiusName = 'small' | 'medium' | 'large' | 'xLarge';
type SizeName = '90' | '95' | 'full';

const FontWeights = {
  Normal: '400',
  Medium: '500',
  SemiBold: '600',
  Bold: '700',
} as const;

type TFontWeights = (typeof FontWeights)[keyof typeof FontWeights];

export interface Theme {
  colors: Record<ColorName, string>;
  fontSizes: Record<FontSizeName, number>;
  fontWeights: Record<keyof typeof FontWeights, TFontWeights>;
  spacing: Record<SpacingName, number>;
  borderRadius: Record<BorderRadiusName, number>;
  sizes: Record<SizeName, DimensionValue>;
}

export const theme: Theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    pink: '#ce1694',
    palePurple: '#fae8f4',
    antiFlashWhite: '#F2F3F4',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
  },
  fontWeights: FontWeights,
  spacing: {
    one: 1,
    small: 4,
    medium: 6,
    large: 8,
    xLarge: 12,
    xxLarge: 18,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    xLarge: 16,
  },
  sizes: {
    '90': '90%',
    '95': '95%',
    full: '100%',
  },
};

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
  },
};
