import React from 'react'

function Last() {
  return (
    <div className='flex flex-col p-4 gap-3'>
        <div className='flex justify-between'>
                <p className='font-bold text-purple-900'>Weekly sales stats</p>
                <p className='font-bold text-black'>:</p>
            </div>  
            <div className='h-1 bg-gray-300'></div>
            <div className='flex flex-wrap h-16 items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-green-300 text-center '>$20</div>
              </div> 
              <div className='flex flex-wrap h-16 items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-green-300 text-center '>$20</div>
              </div>  
              <div className='flex flex-wrap h-16 items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-blue-300 text-center '>$20</div>
              </div>
              <div className='flex flex-wrap h-16 items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-red-300 text-center '>$20</div>
              </div>
        </div>
  )
}

export default Last