"use client"

import {React , useEffect} from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

function page() {

    const params = useParams()
    const router = useRouter()

    // useEffect(() => {
    //   setTimeout(() => {           // this would open in 2333 miliseconds
    //     router.push('/dashboard')
    //   }, 2333);
    // }, [])

    

    return (
        <div>
          {params.slug}

          <button type='button' onClick={()=> router.push('/dashboard')}>dashboard</button>
        </div>
    )
}

export default page
