import Image from "next/image";

export default async function Home() {
  // let data = await fetch('https://api.vercel.app/blog')  // this call would not happen evertime it will just happen one time and data will cached (store) and display evertime ,changes in link file will not show in that after fetch
  // let data = await fetch('https://api.vercel.app/blog', {cache: 'no-store'});   // this will help to refresh data on every request
   let data = await fetch('https://api.vercel.app/blog',{next: {validiate:3600}})  // this will fetch on every 3600 seconds (60 minutes)
  let posts = await data.json()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}


// export const dynamic = 'force-dynamic' // this will help to make this page dynamic when we use npm next build , and it means in dynamic mode this page would rerender evertime in static mode it woulldn't