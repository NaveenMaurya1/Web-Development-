import React from 'react'
import Component_1 from './Component_1'

function Button({count}) {
  return (
    <>
    <div>
        <button><span><Component_1 count= {count}/></span> I am button</button>
    </div>
    </>
  )
}

export default Button
