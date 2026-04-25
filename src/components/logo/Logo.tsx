import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
      <div  className="flex items-center gap-2  ">
          
          
        
                  <Image src="/image/logo.png" alt="logo" width={40} height={40} />
                  <div className="">
                     <h1 className="text-[#47A7CE] text-xl font-bold ">NexCart</h1>
                  <p className="text-sm text-[#4A8AB9] -mt-1">Fast. Simple. NexCart</p> 
                  </div>
                  
       
    </div>
  )
}

export default Logo