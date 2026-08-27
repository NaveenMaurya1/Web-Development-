import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'

// const handler = NextAuth({            // we have to use every provider like this
//   providers: [

//     // OAuth authentication providers...
//     AppleProvider({
//       clientId: process.env.APPLE_ID,
//       clientSecret: process.env.APPLE_SECRET
//     }),
//   ]
// })

// export { handler as GET, handler as POST };

// const handler = NextAuth({            // we have to use every provider like this
//   providers: [

//     // OAuth authentication providers...
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET
//     }),
//   ]
// })

// export { handler as GET, handler as POST };

// const handler = NextAuth({            // we have to use every provider like this
//     providers: [

//         // OAuth authentication providers...
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET
//         }),
//     ]
// })

// export { handler as GET, handler as POST };


// const handler = NextAuth({            // we have to use every provider like this
//     providers: [

//         // OAuth authentication providers...
//         // Passwordless / email sign in
//         EmailProvider({
//             server: process.env.MAIL_SERVER,
//             from: 'NextAuth.js <no-reply@example.com>'
//         }),
//     ]
// })

// export { handler as GET, handler as POST };


const handler = NextAuth({            // we have to use every provider like this
    providers: [

        // OAuth authentication providers...
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
})

export { handler as GET, handler as POST };