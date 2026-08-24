import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished,setShowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {      
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLC = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLC()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const toggleFinished = (e) =>{
      setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLC()

  }

  const handleDelete = (e, id) => {
    
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLC()

  }

  const handleCheckbox = (e) => {
    let id = e.target.name

    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLC()

  }


  return (
    <>

      <Navbar />

      <div className="md:container mx-auto flex justify-center ">
        <div className="my-2.5 bg-violet-200 min-h-[80vh] min-w-[52vw] rounded-2xl">
        <h1 className='text-center font-semibold text-xl mt-3'>iTask manage your todos here </h1>
          <h2 className='font-bold text-lg mx-5 mt-5'>Add Todo</h2>
          <div className=" flex justify-center items-center mb-5">
            <input onChange={handleChange} value={todo} type="text" placeholder='Add Your Task' className="bg-white text-black mx-5 p-1.5 min-w-[40vw] rounded-md " />

            <button
              onClick={handleAdd}
              disabled={!todo?.trim()}
              className="bg-violet-800 font-bold p-2 px-4 mr-3 rounded-lg text-white hover:bg-violet-950 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
          <input onChange={toggleFinished} className='mx-3 cursor-pointer' type="checkbox" checked={showFinished} id="" /> Show Finished
          <h2 className='text-lg font-semibold mx-3'>Your todos</h2>
          <div className="todos">

            {todos.length === 0 && <div className='mx-5'> No Todos to displaying... </div>}
            {todos.map(item => {
              return (showFinished || !item.isCompleted) &&  <div className=" flex justify-between items-center m-3 bg-white p-2 rounded-lg" key={item.id}>
                  <div className='flex gap-3 items-center'>
                    <input className="mt-1 cursor-pointer" onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} />
                    <div className={` max-w-[33vw] wrap-break-word ${item.isCompleted ? "line-through" : ""} `}>
                      {item.todo}
                    </div>
                  </div>

                  <div className="button">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-violet-800 font-bold p-1.5 px-4  mx-3  rounded-lg text-white hover:bg-violet-950"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="bg-red-600 font-bold p-1.5 px-4  rounded-lg text-white hover:bg-red-800"
                    >
                      <MdDelete/>
                    </button>
                  </div>

                </div>
              
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
