"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const Edit = ({ id, title, description }) => {
  const router = useRouter()
  const [newTitle, setnewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const upadteHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        new: newTitle,
        newTitle, newDescription
      })
    })
    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      console.log("Failed to Update Topics")
    }
  }
  return (
    <div className="w-[60%]">
      <form onSubmit={upadteHandler} className="flex flex-col items-center justify-center gap-2">
        <input type="text" onChange={e => setnewTitle(e.target.value)} defaultValue={title} className="p-2 border-2 w-full border-gray-600" />
        <input type="text" onChange={e => setNewDescription(e.target.value)} defaultValue={description} className="p-2 border-2 w-full border-gray-600" />
        <button type="submit" className="bg-gray-600 text-gray-200 text-center flex items-center justify-center px-4 py-2">Update Topic</button>
      </form>
    </div>
  )
}

export default Edit