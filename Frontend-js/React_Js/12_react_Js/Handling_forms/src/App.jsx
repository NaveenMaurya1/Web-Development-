import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting},
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) =>{
    // await delay(3)  // simulating network delay 
    let r = await fetch("http://localhost:3000/",{method:"POST" , headers:{"content-type" : "application/json",},body:JSON.stringify(data)})
    let res = await r.text()
    
    console.log("Form data:", data);
    console.log("Backend response:", res);

    // if (data.userName!== "Shubham") {
    //   setError("myform" , { message : "your form isn't  in good order because credential are invalid"})      
    // }
    // if (data.userName === "Rohan") {
    //   setError("blocked" , { message : "Rohan is not allowed in my database , so fucckkkkk offfff"})  
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username' {...register("userName", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
          {errors.userName && <div>{errors.userName.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />

          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
