# DriveIO Color System Migration Script

## 🔍 **Search & Replace Commands**

This document provides comprehensive search and replace commands to migrate from hardcoded colors to the new DriveIO semantic color system.

## 📋 **Pre-Migration Checklist**

1. ✅ **Backup your codebase**
2. ✅ **Review the new color system** in `COLOR_SYSTEM_README.md`
3. ✅ **Test changes incrementally** on a feature branch
4. ✅ **Verify contrast ratios** meet WCAG 4.5:1 standards

## 🎯 **Primary Color Replacements**

### **From Old HSL System to New Hex System**

```bash
# Replace old HSL primary colors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/180 87% 40%/217 60% 30%/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/174 66% 51%/217 40% 50%/g'

# Replace old HSL accent colors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/180 87% 35%/217 60% 25%/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/174 44% 94%/217 40% 94%/g'
```

### **From Hardcoded Hex Colors**

```bash
# Replace old teal/cyan colors with new primary colors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#00CED1/#1F3D7D/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#0D47A1/#1F3D7D/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#1976D2/#1F3D7D/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#2196F3/#1F3D7D/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#42A5F5/#4A71A2/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#64B5F6/#6B98BC/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#90CAF9/#A6D3F2/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/#BBDEFB/#C5DFF1/g'
```

### **From Generic Blue Colors**

```bash
# Replace generic blue colors with semantic primary colors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-blue-500/bg-primary-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-blue-600/bg-primary-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-blue-700/bg-primary-700/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-blue-800/bg-primary-800/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-blue-900/bg-primary-900/g'

find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-blue-500/text-primary-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-blue-600/text-primary-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-blue-700/text-primary-700/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-blue-800/text-primary-800/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-blue-900/text-primary-900/g'

find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-blue-500/border-primary-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-blue-600/border-primary-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-blue-700/border-primary-700/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-blue-800/border-primary-800/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-blue-900/border-primary-900/g'
```

### **From Generic Gray Colors**

```bash
# Replace generic gray colors with semantic neutral colors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-gray-300/bg-neutral-300/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-gray-600/bg-neutral-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-gray-800/bg-primary-800/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-gray-900/bg-primary-900/g'

find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-gray-300/text-neutral-300/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-gray-600/text-neutral-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-gray-800/text-primary-800/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-gray-900/text-primary-900/g'

find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-gray-300/border-neutral-300/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-gray-600/border-neutral-600/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-gray-800/border-primary-800/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-gray-900/border-primary-900/g'
```

## 🎨 **Gradient Replacements**

### **From Old Gradient System**

```bash
# Replace old HSL-based gradients with new hex-based gradients
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/from-cyan-400 to-teal-400/from-primary-200 to-primary-300/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/from-cyan-500 to-teal-500/from-primary-600 to-primary-400/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/from-cyan-600 to-teal-600/from-primary-700 to-primary-500/g'

# Replace old gradient utility classes
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-gradient-to-r from-cyan-500 to-teal-500/bg-gradient-driveio-button/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-gradient-to-r from-cyan-600 to-teal-600/bg-primary-700/g'
```

## 🔧 **Semantic Color Replacements**

### **From Generic Color Names**

```bash
# Replace generic color names with semantic tokens
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-primary\//bg-primary-600\//g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-primary\//text-primary-600\//g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-primary\//border-primary-600\//g'

# Replace hover states
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/hover:bg-primary\/90/hover:bg-primary-700/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/hover:bg-primary\/80/hover:bg-primary-700/g'
```

### **From Muted Colors**

```bash
# Replace muted colors with semantic equivalents
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-muted\/30/bg-primary-50/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-muted\/50/bg-primary-100/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-muted\/50/border-neutral-300/g'
```

## 📱 **Component-Specific Replacements**

### **Button Components**

```bash
# Primary buttons
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/className="[^"]*bg-primary[^"]*"/className="bg-primary hover:bg-primary-hover text-white"/g'

# Secondary buttons
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/className="[^"]*bg-primary\/10[^"]*"/className="bg-primary-100 hover:bg-primary-200 text-primary-700 border border-neutral-300"/g'
```

### **Card Components**

```bash
# Card backgrounds
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/bg-card/bg-surface/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/border-border/border-neutral-300/g'
```

### **Text Components**

```bash
# Primary text
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-foreground/text-primary-800/g'

# Secondary text
find . -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i '' 's/text-muted-foreground/text-neutral-600/g'
```

## 🚀 **Advanced Search Patterns**

### **Find All Color Usage**

```bash
# Search for all color-related classes
grep -r "bg-\|text-\|border-" src/ | grep -E "(blue|gray|primary|accent)" | head -20

# Search for hardcoded hex colors
grep -r "#[0-9A-Fa-f]\{3,6\}" src/ | head -20

# Search for RGB/RGBA colors
grep -r "rgb(\|rgba(" src/ | head -20
```

### **Find Unused Color Classes**

```bash
# Find potentially unused color classes
grep -r "bg-primary-[0-9]" src/ | cut -d: -f2 | grep -o "bg-primary-[0-9]*" | sort | uniq -c | sort -n
```

## ✅ **Post-Migration Verification**

### **Visual Testing Checklist**

- [ ] **Hero sections** use `--gradient-primary` background
- [ ] **Primary buttons** use `--gradient-button` with `hover:bg-primary-700`
- [ ] **Secondary buttons** use `bg-primary-100` with `hover:bg-primary-200`
- [ ] **Text on light surfaces** uses `text-primary-800` or `text-neutral-600`
- [ ] **Text on dark/gradient surfaces** uses `text-white`
- [ ] **Cards and search bars** use `bg-surface` with `border-neutral-300`
- [ ] **App background** uses `bg-background`

### **Accessibility Testing**

```bash
# Test contrast ratios (requires accessibility testing tools)
# Ensure WCAG 4.5:1 compliance for body text
# Verify color-blind friendly design
```

### **Cross-Browser Testing**

- [ ] **Chrome/Edge** - Modern browsers
- [ ] **Firefox** - CSS variable support
- [ ] **Safari** - CSS variable support
- [ ] **Mobile browsers** - Responsive design

## 🔧 **Troubleshooting**

### **Common Issues**

1. **Colors not updating**: Clear browser cache, restart dev server
2. **Tailwind not recognizing new colors**: Restart Tailwind build process
3. **CSS variables not working**: Check browser support, verify syntax
4. **Gradients not displaying**: Verify CSS variable syntax and values

### **Debug Commands**

```bash
# Check if new colors are loaded
grep -r "primary-600" src/ | head -5

# Verify CSS variables are defined
grep -r "--color-primary-600" src/ | head -5

# Check Tailwind config
grep -r "primary:" tailwind.config.ts
```

## 📚 **Additional Resources**

- **Color System Documentation**: `COLOR_SYSTEM_README.md`
- **Theme Configuration**: `src/lib/theme.ts`
- **CSS Variables**: `src/index.css`
- **Tailwind Config**: `tailwind.config.ts`

## 🎯 **Migration Priority**

1. **High Priority**: Hero sections, primary buttons, main navigation
2. **Medium Priority**: Cards, forms, secondary buttons
3. **Low Priority**: Subtle backgrounds, borders, hover states

---

*Run these commands carefully and test thoroughly. Consider running them on a feature branch first.*
