import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <nav className="h-16 rounded-md mt-10 w-2/4 text-white px-5 flex items-center justify-between bg-slate-700">
        <li className="list-none"><Link href={'/'}>Home</Link></li>
        <Link href={'/add'}><button className="bg-white text-gray-900 py-2 px-6 rounded-md font-bold">Add</button></Link>
      </nav>
    </div>
  )
}

export default Navbar