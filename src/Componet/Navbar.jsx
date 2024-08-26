import { useState } from "react";
import { GrMenu } from "react-icons/gr"
import { IoMdCloseCircleOutline } from "react-icons/io";


function Navbar() {
  const [nav , setNav] = useState(false)

  const  drop = ()=>{
    setNav(!nav)
  }
  return (
    <div className=" container m-auto h-[70px] w-full text-white  flex  flex-row  flex-nowrap justify-between items-center px-4 py-2 md:px-8 md:py-4 m-auto  ">
        <p  className="text-green-500 text-xl font-bold  capitalize">tailwind</p>
        <ul className="gap-4 hidden md:flex  ">
            <li className="p-2 hover:bg-blue-500 rounded-sm">Categroy</li>
            <li className="p-2 hover:bg-blue-500 rounded-sm">Home</li>
            <li className="p-2 hover:bg-blue-500 rounded-sm">About</li>
            <li className="p-2  bg-white text-blue-500 hover:text-white  hover:bg-blue-500 rounded-sm">Contact</li>
        </ul>
        <div className="md:hidden" onClick={drop}>
          {!nav?<GrMenu size={25} />:<IoMdCloseCircleOutline  size={25} />}
        </div>

        <div className={nav?" transtion duration-500 ease-in-out bg-black md:hidden fixed top-0 left-0  text-white w-[60%] h-screen border-r-gray-400 border-r-[1px] " :"  fixed top-0  -left-[60%]" }>
        <p  className=  " text-blue-500 text-xl font-bold  capitalize p-4 ">tailwind</p>
          <ul >
              <li className="  p-4 border-b-[0.5px] border-gary-500 hover:bg-blue-500 rounded-sm">Categroy</li>
              <li className="p-4 border-b-[0.5px] border-gary-500 hover:bg-blue-500 rounded-sm">Home</li>
              <li className="p-4 border-b-[0.5px] border-gary-500 hover:bg-blue-500 rounded-sm">About</li>
              <li className="p-4 border-b-[0.5px] border-gary-500 hover:bg-blue-500 rounded-sm">Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar