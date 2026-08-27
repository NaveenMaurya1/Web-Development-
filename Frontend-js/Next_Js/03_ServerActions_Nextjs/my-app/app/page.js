import fs from "fs/promises"

export default function Home() {   

  const submitAction = async (e) => {
    "use server"  // this means everything here is wroking on server side
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("file.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`)
    console.log(a)
  }

  return (
    <>
      <form  action={submitAction}>

        <div className="flex gap-6 justify-center my-4">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="bg-white text-black rounded-xs px-1" />
        </div>

        <div className="flex gap-2.5 justify-center">
          <label htmlFor="add">Address</label>
          <input name="add" id="add" type="text" className="bg-white text-black rounded-xs px-1" />
        </div>
        <div className="flex justify-center my-5"><button className="bg-blue-600 p-1 px-3 rounded-md hover:bg-blue-800 cursor-pointer">submit</button></div>
      </form>
    </>
  );
}
