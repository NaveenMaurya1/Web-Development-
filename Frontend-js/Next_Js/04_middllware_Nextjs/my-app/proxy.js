import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  // return NextResponse.json({message:"Hey baby , how are you doing ?"})
  return NextResponse.redirect(new URL('/', request.url))  //it will reidrect on '/' this path
}
 
// Matching paths
export const config = {
  matcher: '/about/:path*',  // when enter in this path , it will reidrect on '/' this path
}
// // Matching paths
// export const config = {
//   matcher: '/about2/:path*',  // when enter in this path , it will reidrect on '/' this path
// }






// it will work same like above code 

// import { NextResponse } from 'next/server'
 
// export function proxy(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   }
// }