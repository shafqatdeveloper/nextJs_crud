"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'

const Page = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("Please fill in all fields")
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title, description
        })
      })
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Couldn't Create a Topic")
      }
    } catch (error) {
      console.log("Error: " + error)
    }
  }
  return (
    <div className="w-[60%]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2">
        <input onChange={e => setTitle(e.target.value)} value={title} type="text" className="p-2 border-2 w-full border-gray-600" placeholder="Topic Title" />
        <input onChange={e => setDescription(e.target.value)} value={description} type="text" className="p-2 border-2 w-full border-gray-600" placeholder="Topic Description" />
        <button type="submit" className="bg-gray-600 text-gray-200 text-center flex items-center justify-center px-4 py-2">Add Topic</button>
      </form>
    </div>
  )
}

export default Page