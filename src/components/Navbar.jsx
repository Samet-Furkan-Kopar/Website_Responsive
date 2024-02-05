
import { AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>navbar</h1>
      <ul className="flex hidden ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu/>
      </div>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>navbar</h1>
      <ul className="flex hidden ">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
