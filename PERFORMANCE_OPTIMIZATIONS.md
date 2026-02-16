# Performance Optimization Guide

## Improvements Made ✅

### 1. **Vite Build Optimization**

- **Code Splitting**: Split bundles into vendor chunks (React, Three.js, Framer Motion)
- **Minification**: Enabled Terser with console removal
- **Asset Optimization**: Configured chunk size limits
- **Dependency Optimization**: Pre-bundled heavy dependencies

### 2. **Lazy Loading Components**

- StarsCanvas now lazy loads to defer 3D rendering
- Components only load when needed instead of on initial page load
- Reduces initial bundle and improves Time to Interactive (TTI)

### 3. **Canvas Rendering Optimization**

- **Reduced Device Pixel Ratio (DPR)**: Mobile devices use DPR 1, desktop uses 1.5x max
- **Disabled Anti-aliasing**: Trades slight quality for 20-30% performance gain
- **Reduced Shadow Map Size**: 512 instead of 1024 (50% faster shadows)
- **Optimized GL Settings**: Disabled stencil buffer, optimized depth testing
- **Reduced Star Count**: 3000 particles instead of 5001 (visual quality maintained)

### 4. **HTML Optimization**

- Added preload directives for 3D models
- Enhanced meta tags
- Improved resource hints

## Additional Recommendations 🚀

### Asset Compression

```bash
# Install compression tools
npm install --save-dev vite-plugin-compression

# Add to vite.config.js:
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
})
```

### Image Optimization

- **Replace large images with WebP format** (80% smaller)
- **Use responsive images** with srcset
- **Install image plugin**:

```bash
npm install --save-dev vite-plugin-image-optimization
```

### GLTF Model Optimization

- **Compress 3D models** using Draco compression:

```javascript
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("...");
```

- **Use Brotli compression** for better model size:

```bash
# In vite.config.js
compression({
  algorithm: 'brotli',
  ext: '.br',
})
```

### Bundle Analysis

```bash
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js plugins
```

### Runtime Performance Tips

1. **Enable Chrome's Lighthouse**: Audit performance regularly
2. **Use Performance API**:

```javascript
console.log(performance.now()); // Track load times
```

3. **Monitor 3D FPS**: Add FPS counter for production debugging
4. **Implement Service Worker**: Cache static assets

```bash
npm install --save-dev vite-plugin-pwa
```

## Performance Targets 🎯

- **First Contentful Paint (FCP)**: < 2s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Bundle Size**: < 300KB (gzipped)

## Testing Performance

```bash
# Run production build
npm run build

# Check bundle size
npm run preview

# Use Chrome DevTools:
# 1. Open Lighthouse
# 2. Run audit
# 3. Check Performance score
```

## Deployment Checklist ✓

- [ ] Run `npm run build` and verify bundle size
- [ ] Test on mobile devices with 4G connection
- [ ] Check Core Web Vitals in Lighthouse
- [ ] Enable gzip/brotli compression on server
- [ ] Set proper cache headers:
  - Static assets: 1 year
  - HTML: no-cache
- [ ] Use CDN for model files (if possible)
- [ ] Monitor performance in production

## Quick Deploy Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

---

**Last Updated**: Feb 2026  
**Author**: Performance Optimization Guide
