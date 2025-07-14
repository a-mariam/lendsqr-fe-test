import type {Config} from "tailwindcss";


const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '576px',
                'md': '900px',
                'xl': '1280px',
                'lg': '1440px',
                '2xl': '1536px',
            },
        }
    },
    plugins: [],
}

export default config;