/**
 * DriveIO Design System - Central Theme Configuration
 * 
 * This file provides a unified color system that can be used across:
 * - React Native / Web: Export tokens and CSS variables
 * - Tailwind CSS: Extend theme colors
 * - SwiftUI: Named Asset colors and Color extension
 */

// ============================================================================
// COLOR PALETTE TOKENS
// ============================================================================

export const colors = {
  primary: {
    900: '#040B25',
    800: '#031A5C',
    700: '#012687',
    600: '#1F3D7D',
    400: '#4A71A2',
    300: '#6B98BC',
    200: '#A6D3F2',
    100: '#C5DFF1'
  },
  neutral: {
    600: '#546E82',
    300: '#C6CDD4'
  },
  surface: '#FFFFFF',
  background: '#D4E9F6',
  gradients: {
    primary: 'linear-gradient(180deg, #031A5C 0%, #1F3D7D 60%, #012687 100%)',
    button: 'linear-gradient(180deg, #1F3D7D 0%, #4A71A2 100%)'
  }
} as const;

// ============================================================================
// SEMANTIC COLOR TOKENS
// ============================================================================

export const semanticColors = {
  // Text colors
  text: {
    primary: colors.primary[800],
    secondary: colors.neutral[600],
    onDark: '#FFFFFF',
    onLight: colors.primary[800]
  },
  
  // Background colors
  bg: {
    primary: colors.primary[600],
    secondary: colors.primary[100],
    surface: colors.surface,
    background: colors.background,
    muted: colors.primary[100]
  },
  
  // Border colors
  border: {
    primary: colors.primary[300],
    secondary: colors.neutral[300],
    muted: colors.primary[100]
  },
  
  // Interactive states
  interactive: {
    primary: colors.primary[600],
    primaryHover: colors.primary[700],
    secondary: colors.primary[100],
    secondaryHover: colors.primary[200]
  }
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get color by name and optional shade
 * @param name - Color name (e.g., 'primary', 'neutral')
 * @param shade - Optional shade number (e.g., 600, 800)
 * @returns Hex color value
 */
export function getColor(name: keyof typeof colors, shade?: number): string {
  const colorGroup = colors[name];
  
  if (typeof colorGroup === 'string') {
    return colorGroup;
  }
  
  if (shade && typeof colorGroup === 'object' && shade in colorGroup) {
    return colorGroup[shade as keyof typeof colorGroup] as string;
  }
  
  // Return default shade for primary colors
  if (name === 'primary') {
    return colorGroup[600];
  }
  
  // Return first available color for other groups
  if (typeof colorGroup === 'object') {
    const firstKey = Object.keys(colorGroup)[0];
    return colorGroup[firstKey as keyof typeof colorGroup] as string;
  }
  
  return '#000000'; // Fallback
}

/**
 * Get semantic color by context
 * @param context - Usage context (e.g., 'button', 'text', 'background')
 * @param variant - Optional variant (e.g., 'primary', 'secondary')
 * @returns Hex color value
 */
export function getSemanticColor(context: string, variant: string = 'primary'): string {
  switch (context) {
    case 'text':
      return variant === 'primary' ? semanticColors.text.primary : semanticColors.text.secondary;
    case 'background':
      return variant === 'primary' ? semanticColors.bg.primary : semanticColors.bg.background;
    case 'surface':
      return semanticColors.bg.surface;
    case 'border':
      return variant === 'primary' ? semanticColors.border.primary : semanticColors.border.secondary;
    case 'button':
      return variant === 'primary' ? semanticColors.interactive.primary : semanticColors.interactive.secondary;
    default:
      return semanticColors.text.primary;
  }
}

// ============================================================================
// CSS VARIABLE GENERATION
// ============================================================================

/**
 * Generate CSS variables for web usage
 * @returns Object with CSS variable names and values
 */
export function generateCSSVariables() {
  const cssVars: Record<string, string> = {};
  
  // Primary colors
  Object.entries(colors.primary).forEach(([shade, value]) => {
    cssVars[`--color-primary-${shade}`] = value;
  });
  
  // Neutral colors
  Object.entries(colors.neutral).forEach(([shade, value]) => {
    cssVars[`--color-neutral-${shade}`] = value;
  });
  
  // Surface and background
  cssVars['--color-surface'] = colors.surface;
  cssVars['--color-background'] = colors.background;
  
  // Gradients
  cssVars['--gradient-primary'] = colors.gradients.primary;
  cssVars['--gradient-button'] = colors.gradients.button;
  
  // Semantic colors
  Object.entries(semanticColors.text).forEach(([key, value]) => {
    cssVars[`--color-text-${key}`] = value;
  });
  
  Object.entries(semanticColors.bg).forEach(([key, value]) => {
    cssVars[`--color-bg-${key}`] = value;
  });
  
  Object.entries(semanticColors.border).forEach(([key, value]) => {
    cssVars[`--color-border-${key}`] = value;
  });
  
  Object.entries(semanticColors.interactive).forEach(([key, value]) => {
    cssVars[`--color-interactive-${key}`] = value;
  });
  
  return cssVars;
}

// ============================================================================
// TAILWIND CONFIG GENERATION
// ============================================================================

/**
 * Generate Tailwind CSS color configuration
 * @returns Object for Tailwind theme.extend.colors
 */
export function generateTailwindColors() {
  return {
    primary: {
      50: colors.primary[100],
      100: colors.primary[100],
      200: colors.primary[200],
      300: colors.primary[300],
      400: colors.primary[400],
      500: colors.primary[600],
      600: colors.primary[600],
      700: colors.primary[700],
      800: colors.primary[800],
      900: colors.primary[900],
      DEFAULT: colors.primary[600]
    },
    neutral: {
      300: colors.neutral[300],
      600: colors.neutral[600]
    },
    surface: colors.surface,
    background: colors.background
  };
}

// ============================================================================
// SWIFTUI COLOR EXTENSION GENERATION
// ============================================================================

/**
 * Generate SwiftUI Color extension code
 * @returns SwiftUI Color extension code as string
 */
export function generateSwiftUIColors(): string {
  return `
import SwiftUI

extension Color {
    // Primary Colors
    static let primary900 = Color("Primary900")
    static let primary800 = Color("Primary800")
    static let primary700 = Color("Primary700")
    static let primary600 = Color("Primary600")
    static let primary400 = Color("Primary400")
    static let primary300 = Color("Primary300")
    static let primary200 = Color("Primary200")
    static let primary100 = Color("Primary100")
    
    // Neutral Colors
    static let neutral600 = Color("Neutral600")
    static let neutral300 = Color("Neutral300")
    
    // Surface Colors
    static let surface = Color("Surface")
    static let background = Color("Background")
    
    // Semantic Colors
    static let textPrimary = Color("TextPrimary")
    static let textSecondary = Color("TextSecondary")
    static let textOnDark = Color("TextOnDark")
    static let textOnLight = Color("TextOnLight")
    
    static let bgPrimary = Color("BgPrimary")
    static let bgSecondary = Color("BgSecondary")
    static let bgMuted = Color("BgMuted")
    
    static let borderPrimary = Color("BorderPrimary")
    static let borderSecondary = Color("BorderSecondary")
    static let borderMuted = Color("BorderMuted")
    
    static let interactivePrimary = Color("InteractivePrimary")
    static let interactivePrimaryHover = Color("InteractivePrimaryHover")
    static let interactiveSecondary = Color("InteractiveSecondary")
    static let interactiveSecondaryHover = Color("InteractiveSecondaryHover")
}
`;
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  colors,
  semanticColors,
  getColor,
  getSemanticColor,
  generateCSSVariables,
  generateTailwindColors,
  generateSwiftUIColors
};
