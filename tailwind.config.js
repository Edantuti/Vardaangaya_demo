  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Or if using `src` directory:
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    fontFamily:{
      'roboto':['Roboto Mono', 'monospace']
    }
  },
  plugins: [
    require('flowbite/plugin')
    ],
}

