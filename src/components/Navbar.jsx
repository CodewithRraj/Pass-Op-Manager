import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-12">

        <div className="logo font-bold text-white text-xl">
            <span className='text-green-700 text-2xl'>&lt;</span>
           
            <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            
            </div>
     
      <button className='text-white bg-green-600 rounded-full flex ring-white ring-1 h-[30px] '>
        <img className='invert  w-8 p-1' src="icons/github.png" alt="github logo" />
        <span className='font-bold text-sm p-1'>Github</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
