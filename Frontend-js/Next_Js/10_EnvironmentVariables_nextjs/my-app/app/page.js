// "use client"

export default function Home() {

  // we can't display env content on client side but that's why we use "NEXT_PUBLIC_"VARAIABLENAME , it can be displayed only on server side

  // console.log("the is id :", process.env.ID)   
  // console.log("the is secret :", process.env.SECRET)

  // .env.local > .env   , it is priority
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      the id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET}  and name is {process.env.NAME}   
    </div>
  );
}
