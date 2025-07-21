/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,

    },
    images: {domains: ['dummyjson.com'],},

};


export default nextConfig;