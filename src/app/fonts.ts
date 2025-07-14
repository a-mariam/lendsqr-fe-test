import { IBM_Plex_Sans, Inter,Roboto,Work_Sans} from 'next/font/google';
import localFont from "next/font/local";

export const workSans =  Work_Sans({
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    weight: '500',
    preload: false
})
export const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    weight: '400',
    preload: false

});

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    weight: '400',
    preload: false

});

export const inter700 = Inter({
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    weight: '700',
    preload: false

});



export const cabinetGroteskRegular = localFont({
    src: "./fonts/CabinetGrotesk-Regular.woff",
    variable: "--font-cabinet-grotesk",
    weight: "400",
    preload: false
});

export const AvenirNext400 = localFont({
    src: "./fonts/Avenir-Next-LT-Pro-Bold.otf",
    variable: "--font-avenirNext",
    weight: "400",
    preload: false
})
export const AvenirNext600 = localFont({
    src: "./fonts/Avenir-Next-LT-Pro-Bold.otf",
    variable: "--font-avenirNext",
    weight: "600",
    preload: false
})

export const Roboto400 = Roboto({
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    weight: "400",
    preload: false
})
export const AvenirNext700 = localFont({
    src: "./fonts/Avenir-Next-LT-Pro-Bold.otf",
    variable: "--font-avenirNext",
    weight: "700",
    preload: false
})
