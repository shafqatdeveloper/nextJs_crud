"use client"

import { HiTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'


const RemoveBtn = ({ id }) => {
  const router = useRouter()
  const handleDelete = async (e) => {
    const confirmed = confirm("Are you sure you want to delete")
    if (confirmed) {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        router.refresh()
      }
    }
  }
  return (
    <>
      <HiTrash size={25} className='text-red-500 cursor-pointer' onClick={handleDelete} />
    </>
  )
}

export default RemoveBtn