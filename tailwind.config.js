export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary':     '#0e0f10',
        'secondary':   '#4e5a63',
        'grey-1000':   '#0e0f10',
        'grey-700':    '#4e5a63',
        'grey-600':    '#61717c',
        'grey-400':    '#a0aab0',
        'grey-300':    '#c0c6cb',
        'grey-100':    '#eff1f2',
        'teal-700':    '#1bb599',
        'blue-link':   '#0056ce',
        'brand':       '#3392ff',
        'red-700':     '#cb3030',
        'footer-bg':   '#f7f8f8',
        'hero-bg':     '#f4fbff',
        'white':       '#ffffff',
      },
      fontFamily: {
        'inter':     ['Inter', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'body-xs':  ['12px', { lineHeight: '16px' }],
        'body-sm':  ['14px', { lineHeight: '20px' }],
        'body-md':  ['16px', { lineHeight: '24px' }],
        'display-4xs': ['14px', { lineHeight: '20px' }],
        'display-xl':  ['40px', { lineHeight: '48px', letterSpacing: '-0.2px' }],
        'display-md':  ['28px', { lineHeight: '34px', letterSpacing: '-0.2px' }],
      },
      borderRadius: {
        '8':  '8px',
        '12': '12px',
      },
      boxShadow: {
        'header': '0 8px 16px 0 rgba(0,0,0,0.12), 0 0 2px 0 rgba(0,0,0,0.12)',
        'input':  '0 8px 16px 0 rgba(51,146,255,0.12), 0 0 2px 0 rgba(51,146,255,0.12)',
        'btn':    '0 8px 16px 0 rgba(27,181,153,0.12), 0 0 2px 0 rgba(27,181,153,0.12)',
      },
      maxWidth: {
        'content': '1200px',
        'header':  '1392px',
      },
      screens: {
        // Figma breakpoints — mobile-first
        'bp-799':  '799px',
        'bp-991':  '991px',
        'bp-1440': '1440px',
      },
    },
  },
  plugins: [],
}
