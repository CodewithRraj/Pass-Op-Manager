import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="logo font-bold text-white">
            <span className='text-green-700 text-2xl'>&lt;</span>
           
            <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            
            </div>
    <div className='flex justify-center items-center'>Created with <img className=' display: inline w-6 mx-2' src="icons/icon-heart.png" alt="" /> by CodeWithRaj
    </div>
    </div>
  )
}

export default Footer
