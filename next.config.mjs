
/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
// domains:['cdn.senity.io'],
//     },
// };

// modules.exports = nextConfig;

// module.exports = {
//     images: {
//       domains: ['cdn.sanity.io'], // Ensure 'cdn.sanity.io' or your Sanity image domain is added
//     },
//     reactStrictMode: true,
//   };
  



/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'], // Add your sanity image domain here
    },
  };
  
  export default nextConfig;
  