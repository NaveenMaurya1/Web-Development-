import Image from "next/image"

export default function Home() {
  return (
    <>
   <div> I am Homepage</div>
  <div className="  bg-red-300">
    {/* this html img anchor tag, it is not Image from next/image */}
    {/* <img className="mx-auto size-100" src="https://wallpaperaccess.com/full/1243751.jpg" alt="Aesthetic SunSet" /> */}

    {/* here using this Image nextjs's tag we have to give width and height everytime   */}
    {/* using this tag reduce size of image in mb or kb according to reduceness size on screen */}
    {/* here we can use "fill={boolean}" property but we have to use positioning lik position :relative and etc things. */}
    <Image className="mx-auto " width={500} height={100} src="https://wallpaperaccess.com/full/1243751.jpg" alt="Aesthetic SunSet" />
  </div>
    </>
  )
}
