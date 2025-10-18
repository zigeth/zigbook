import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './content/**/*.{md,mdc,vue}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.config.{js,ts}',
    './app.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfff7',
          100: '#d6ffe8',
          200: '#aeffd5',
          300: '#75fdbd',
          400: '#3deaa3',
          500: '#12ce89',
          600: '#04a46f',
          700: '#047f59',
          800: '#066548',
          900: '#064f3a'
        }
      },
      fontFamily: {
        sans: ['Inter Tight', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      boxShadow: {
        floating: '0 24px 60px -28px rgba(15, 23, 42, 0.45)'
      }
    }
  }
}
