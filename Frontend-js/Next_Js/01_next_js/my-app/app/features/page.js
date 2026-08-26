import React from 'react'
import Script from 'next/script'; // it is imported to use script tag to write JavaScript

function page() {
  return (
    <div>
      I am Features Page
      <Script>
        {`
        alert("Welcome to feature Page")
        `}
      </Script>
    </div>
  )
}

export default page

export const metadata = {     // it shows tab name
  title: "Facebook - feature",
  description: "Facebook feature page",
};