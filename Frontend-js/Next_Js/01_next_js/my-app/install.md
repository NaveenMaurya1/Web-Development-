to install Next_Js....
"npx create-next-app@latest"


  // we have to write this package to use Image tag from Next_Js if image is not in public folder ,like if we are suing url. we have to put this in "next.config.js" file's inside nextConfig variable..

https://wallpaperaccess.com/full/1243751.jpg   like here is https and hostname:"wallpaperaccess.com"

 " images: {   
    remotePatterns: [
      {
        protocol: "http",  // sever name ,it canbe anything like http or https
        hostname: "wallpaperaccess.com",   // here should be host name
      },
    ],
  },"

