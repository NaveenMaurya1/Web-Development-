import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
 const [form, setForm] = useState({
  name: "",
  phone: ""
})
  
  const handleClick = () =>{
    alert("Hey i am an Arrow function")
  } 
  const mouseOnRed = () => {
    alert("Hey i am Arrow and i am on the redBox right Now")
  }
  const setChange = (e) => {
      setName(e.target.value)
  }
  
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })

  console.log(form)
}
  return (
    <>
     <div className="btn">
      <button
          type="button"
          className="counter"
          onClick={handleClick}
        >
          click me
        </button>
        </div>

        {/* <div className="container">
          <div className="redBox" onMouseOver={mouseOnRed}>
            i am Red Box
           
          </div>
        </div> */}

        <div className="container">

          <input type="text" value={name} onChange={setChange}/>

          <input type="text" name="name" value={form.name} onChange={handleChange}/>
          <input type="text" name="phone" value={form.phone} onChange={handleChange}/>

        </div>
    </>
  )
}

export default App
