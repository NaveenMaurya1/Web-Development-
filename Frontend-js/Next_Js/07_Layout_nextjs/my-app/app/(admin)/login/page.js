import React from 'react'

function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Hey I am admin Login page
      <p>Follow the instruction to login as an admin </p>
    </div>

  )
}

export default page

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  console.log(resolvedParams);

  return {
    title: "Admin login page in layout app",
  };
}
