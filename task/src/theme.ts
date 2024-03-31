import { DimensionValue } from 'react-native';

type ColorName = 'white' | 'black' | 'pink';
type FontSizeName = 'small' | 'medium' | 'large' | 'xlarge';
type SpacingName = 'one' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
type BorderRadiusName = 'small' | 'medium' | 'large' | 'xlarge';
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
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
  },
  fontWeights: FontWeights,
  spacing: {
    one: 1,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 12,
    xxlarge: 18,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    xlarge: 16,
  },
  sizes: {
    '90': '90%',
    '95': '95%',
    full: '100%',
  },
};
