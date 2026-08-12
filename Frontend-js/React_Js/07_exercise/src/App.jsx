import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [card, setCard] = useState([])

  const fetchData = async () => {
    let a = await fetch(' https://jsonplaceholder.typicode.com/posts')
    let Data = await a.json()
    setCard(Data)
    console.log(Data)
  }

  useEffect(() => {
    fetchData()


  }, [])


  return (
    <>
        <div className="container">

            {/* we are writing javaScript that's why we are using curly brackets here */}
            { card.map((card) =>{
                return <div className="cards">
                <h1>{card.tittle}</h1>
                <p>{card.body}</p>
                <span>By userid {card.userId} and Id is {card.id}</span>
                  </div>
            }) }                                 
          
        </div>
    </>
  )
}

export default App
