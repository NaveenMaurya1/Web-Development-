/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
   // we have to write this package to use Image tag from Next_Js if image is not in public folder ,like if we are suing url.          
  images: {   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
      },
    ],
  },

};

export default nextConfig;



