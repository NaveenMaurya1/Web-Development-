import React, { useContext } from 'react'
import { counterContext } from '../Context/context.js'


function Component_1() {
    const value = useContext(counterContext)
  return (
    <>
    <div>
        I am Component_1
       {value.count}
    </div>
    </>
  )
}

export default Component_1
