import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"


const TopicsList = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", { cache: "no-cache" })
    if (!res.ok) {
      throw new Error("Couldn't Fetch Data")
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching data", error)
  }
}
const Topics = async () => {
  const { topics } = await TopicsList();
  return (
    <div className="w-[60%] mt-5">
      {
        topics.map((topic) => (
          <div className="p-2 my-2 flex justify-between border-[1px] border-gray-400  ">
            <div>
              <h1 className="font-semibold text-lg tracking-wider">{topic.title}</h1>
              <p className="text-gray-600">{topic.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <RemoveBtn id={topic._id} />
              <Link href={`/edit/${topic._id}`} >
                <HiPencilAlt size={25} className="text-green-500" />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Topics