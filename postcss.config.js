/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    // Parse Tailwind directives and add utilities
    tailwindcss: {},
    
    // Add vendor prefixes for browser compatibility
    autoprefixer: {
      // Target last 2 versions of each browser, excluding dead browsers
      browsers: ['> 1%', 'last 2 versions', 'not dead'],
    }
  },
};