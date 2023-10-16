import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const SidebarHeader = ({handelClose}: {handelClose: ()=> void}) => {
  return (
    <div className="bg-[var(--yellowColor)] p-3"> {/* Header of sidebar */}
    <AiOutlineClose
        onClick={handelClose}
        className="absolute top-4 font-bold left-3 cursor-pointer"
        size={20}
    />
    <p className="text-center font-bold uppercase">My Cart</p>
  </div>
  )
}

export default SidebarHeader