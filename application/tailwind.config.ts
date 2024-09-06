import type { Config } from 'tailwindcss';

const blocks = { default: 1.75, sm: 2, md: 2.25, lg: 2.5, xl: 3 };

const config: Config = {
    content: [
        './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'filler-page': '1920px',
                nsm: { max: '639px' },
                nmd: { max: '767px' },
                nlg: { max: '1023px' },
                nxl: { max: '1279px' },
                n2xl: { max: '1535px' },
                '3xl': '1600px',
                n3xl: { max: '1599px' },
            },
            colors: {
                blackish: '#0E171D',
                main: '#191919',
                border: '#4F5258',
                section: '#212226',
                yellowish: '#E3A646',
                blueish: '#2D3F5C',
                'blueish-light': '#3A4D6B',
                grayish: '#373A40',
                silverish: '#4F5258',
                'section-dark': '#1f1f1f',
                g: {
                    blackish: '#0e1111',
                    grayish: '#3b444b',
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
            spacing: {
                'navbar-h': '93px',
                'max-page-p': 'calc(((100vw - 1520px) / 2) + 5rem) ',
                filler: 'calc(((100vw - 1920px) / 2)) ',
                'max-page': '1520px',
                'max-full-page': 'calc(1520px + ((100vw - 1520px) / 2))',
                'block-phone': `${blocks.default}rem`,
                'block-sm': `${blocks.sm}rem`,
                'block-md': `${blocks.md}rem`,
                'block-lg': `${blocks.lg}rem`,
                'block-xl': `${blocks.xl}rem`,
                '2-block-phone': `${blocks.default * 2}rem`,
                '2-block-sm': `${blocks.sm * 2}rem`,
                '2-block-md': `${blocks.md * 2}rem`,
                '2-block-lg': `${blocks.lg * 2}rem`,
                '2-block-xl': `${blocks.xl * 2}rem`,
                '3-block-phone': `${blocks.default * 3}rem`,
                '3-block-sm': `${blocks.sm * 3}rem`,
                '3-block-md': `${blocks.md * 3}rem`,
                '3-block-lg': `${blocks.lg * 3}rem`,
                '3-block-xl': `${blocks.xl * 3}rem`,
            },
        },
    },
    plugins: [],
};
export default config;
