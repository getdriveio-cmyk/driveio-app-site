# DriveIO Design System - Color System

## 🎨 **Overview**

The DriveIO color system provides a unified, semantic approach to colors across all platforms:
- **React Native / Web**: CSS variables and theme tokens
- **Tailwind CSS**: Extended theme colors
- **SwiftUI**: Named Asset colors and Color extensions

## 🌈 **Color Palette**

### **Primary Colors (Deep Blue Foundation)**
```css
--color-primary-900: #040B25  /* Darkest - Headers, text on light */
--color-primary-800: #031A5C  /* Dark - Main text, headings */
--color-primary-700: #012687  /* Dark - Hover states, pressed */
--color-primary-600: #1F3D7D  /* Base - Primary buttons, links */
--color-primary-400: #4A71A2  /* Medium - Accents, highlights */
--color-primary-300: #6B98BC  /* Light - Borders, icons */
--color-primary-200: #A6D3F2  /* Lighter - Backgrounds, hover */
--color-primary-100: #C5DFF1  /* Lightest - Muted backgrounds */
```

### **Neutral Colors**
```css
--color-neutral-600: #546E82  /* Secondary text, labels */
--color-neutral-300: #C6CDD4  /* Borders, dividers */
```

### **Surface Colors**
```css
--color-surface: #FFFFFF      /* Cards, modals, content areas */
--color-background: #D4E9F6  /* App background, page backgrounds */
```

### **Gradients**
```css
--gradient-primary: linear-gradient(180deg, #031A5C 0%, #1F3D7D 60%, #012687 100%)
--gradient-button: linear-gradient(180deg, #1F3D7D 0%, #4A71A2 100%)
```

## 🎯 **Semantic Usage Patterns**

### **Text Colors**
- **Primary Text**: `text-primary-800` - Main content, headings
- **Secondary Text**: `text-neutral-600` - Subtle text, captions
- **On Dark Backgrounds**: `text-white` - Text over gradients/dark surfaces
- **On Light Backgrounds**: `text-primary-800` - Text over white/light surfaces

### **Background Colors**
- **Primary Backgrounds**: `bg-primary-600` - Buttons, CTAs
- **Secondary Backgrounds**: `bg-primary-100` - Subtle backgrounds, hover states
- **Surface Backgrounds**: `bg-surface` - Cards, modals, content areas
- **App Background**: `bg-background` - Page backgrounds, subtle patterns

### **Border Colors**
- **Primary Borders**: `border-primary-300` - Main borders, focus states
- **Secondary Borders**: `border-neutral-300` - Subtle borders, dividers
- **Muted Borders**: `border-primary-100` - Very subtle borders

### **Interactive States**
- **Primary Buttons**: `bg-primary-600` → `hover:bg-primary-700`
- **Secondary Buttons**: `bg-primary-100` → `hover:bg-primary-200`
- **Links**: `text-primary-600` → `hover:text-primary-700`

## 🚀 **Implementation Examples**

### **CSS Variables (Web)**
```css
.my-component {
  background-color: var(--color-primary-600);
  color: var(--color-text-on-dark);
  border: 1px solid var(--color-border-primary);
}

.my-gradient {
  background: var(--gradient-primary);
}
```

### **Tailwind Classes**
```jsx
// Primary button
<button className="bg-primary-600 hover:bg-primary-700 text-white">
  Click Me
</button>

// Secondary button
<button className="bg-primary-100 hover:bg-primary-200 text-primary-700 border border-primary-300">
  Secondary Action
</button>

// Card with new colors
<div className="bg-surface border border-neutral-300 rounded-lg p-6">
  <h3 className="text-primary-800 text-xl font-semibold">Card Title</h3>
  <p className="text-neutral-600">Card content goes here</p>
</div>
```

### **React Component Usage**
```jsx
import { colors, getColor, getSemanticColor } from '@/lib/theme';

// Direct color access
const buttonColor = colors.primary[600];

// Semantic color helper
const textColor = getSemanticColor('text', 'primary');
const borderColor = getSemanticColor('border', 'secondary');

// Dynamic color with shade
const hoverColor = getColor('primary', 700);
```

## 🎨 **Component-Specific Guidelines**

### **Headers & Hero Sections**
- **Background**: Use `--gradient-primary` for hero sections
- **Text**: `#FFFFFF` for text over gradients
- **Accents**: `primary-200` to `primary-400` for highlights

### **Primary Buttons**
- **Background**: `--gradient-button` with `hover:bg-primary-700`
- **Text**: `#FFFFFF`
- **Shadows**: `shadow-lg hover:shadow-xl`

### **Secondary Buttons & Chips**
- **Background**: `bg-primary-100`
- **Text**: `text-primary-700`
- **Border**: `border-neutral-300`
- **Hover**: `hover:bg-primary-200`

### **Cards & Search Bars**
- **Background**: `bg-surface` (#FFFFFF)
- **Border**: `border-neutral-300`
- **Shadow**: `shadow-md` for depth

### **Tabs & Icons on Light Surfaces**
- **Color**: `text-neutral-600` for subtle elements
- **Hover**: `text-primary-600` for interactive states

## 🔧 **Utility Classes**

### **Background Utilities**
```css
.bg-driveio-primary      /* Primary color backgrounds */
.bg-driveio-primary-light /* Light primary backgrounds */
.bg-driveio-surface      /* Surface color backgrounds */
.bg-driveio-background   /* App background color */
```

### **Text Utilities**
```css
.text-driveio-primary     /* Primary text color */
.text-driveio-secondary   /* Secondary text color */
.text-driveio-on-dark     /* Text for dark backgrounds */
.text-driveio-on-light    /* Text for light backgrounds */
```

### **Border Utilities**
```css
.border-driveio-primary   /* Primary border color */
.border-driveio-secondary /* Secondary border color */
.border-driveio-muted     /* Muted border color */
```

### **Gradient Utilities**
```css
.bg-gradient-driveio-primary  /* Primary gradient */
.bg-gradient-driveio-button   /* Button gradient */
```

## 📱 **Cross-Platform Support**

### **React Native / Web**
```typescript
import { colors, semanticColors } from '@/lib/theme';

// Use semantic colors for consistent theming
const styles = StyleSheet.create({
  button: {
    backgroundColor: semanticColors.interactive.primary,
    borderColor: semanticColors.border.primary,
  },
  text: {
    color: semanticColors.text.primary,
  }
});
```

### **SwiftUI**
```swift
import SwiftUI

// Use the generated Color extension
struct ContentView: View {
    var body: some View {
        VStack {
            Text("DriveIO")
                .foregroundColor(.textPrimary)
                .background(Color.bgPrimary)
        }
        .background(Color.background)
    }
}
```

## 🎯 **Accessibility & Contrast**

### **WCAG 4.5:1 Compliance**
- **Light Surfaces**: Use `text-primary-800` or `text-neutral-600`
- **Dark/Gradient Surfaces**: Use `text-white`
- **Interactive Elements**: Ensure sufficient contrast with backgrounds

### **Color Blindness Considerations**
- **Primary Actions**: Use both color and shape/icon to indicate purpose
- **Status Indicators**: Combine colors with text labels
- **Charts/Graphs**: Use patterns and labels in addition to colors

## 🔄 **Migration Guide**

### **From Old HSL System**
```css
/* OLD */
--primary: 180 87% 40%;
--accent: 174 66% 51%;

/* NEW */
--color-primary-600: #1F3D7D;
--color-primary-400: #4A71A2;
```

### **From Hardcoded Colors**
```jsx
// OLD
<div className="bg-blue-500 text-white">

// NEW
<div className="bg-primary text-white">
```

### **From Generic Tailwind Colors**
```jsx
// OLD
<button className="bg-blue-600 hover:bg-blue-700">

// NEW
<button className="bg-primary hover:bg-primary-hover">
```

## 📚 **File Structure**

```
src/
├── lib/
│   └── theme.ts              # Main theme configuration
├── index.css                 # CSS variables and utilities
└── tailwind.config.ts        # Tailwind color extensions
```

## 🚀 **Getting Started**

1. **Import the theme**: `import { colors } from '@/lib/theme'`
2. **Use semantic classes**: `className="bg-primary text-white"`
3. **Apply gradients**: `className="bg-gradient-driveio-primary"`
4. **Customize as needed**: Extend the theme object for project-specific colors

## 🔍 **Best Practices**

- **Always use semantic colors** instead of hardcoded hex values
- **Leverage the gradient system** for visual hierarchy
- **Maintain consistent contrast ratios** for accessibility
- **Use the utility classes** for rapid development
- **Test across different backgrounds** to ensure readability

---

*This color system ensures consistency across all DriveIO platforms while maintaining flexibility for future design iterations.*
