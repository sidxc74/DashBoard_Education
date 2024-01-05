import React from 'react'
import { LineChart,Line,ResponsiveContainer } from 'recharts'

function LineChart2() {

    const linedata = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 6 },
        { x: 4, y: 9 },
        { x: 5, y: 4 },
        { x: 6, y: 6 },
        { x: 7, y: 2 },
        { x: 8, y: 1 },
        { x: 9, y: 4 },
      ];

  return (
    <div className='flex flex-col p-4 gap-3'>
        <div className='flex justify-between'>
                <p className='font-bold text-purple-900'>Weekly sales stats</p>
                <p className='font-bold text-black'>:</p>
            </div>  
            <div className='h-1 bg-gray-300'></div>
            <ResponsiveContainer width='80%' aspect={1.5}>
              <LineChart data ={linedata}>
             
              <Line  type='monotone' dot={false} dataKey='y' stroke='purple' fill='purple'/>
             
              </LineChart>
              </ResponsiveContainer>
            
              <div className='flex flex-wrap items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-green-300 text-center '>$20</div>
              </div>  
              <div className='flex flex-wrap items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-blue-300 text-center '>$20</div>
              </div>
              <div className='flex flex-wrap items-center justify-between w-[300px]'>
                <img src="./user.svg" className='w-8 h-8 object-cover'/>
                <p>Adobe part 01</p>
                <div className='w-8  rounded bg-red-300 text-center '>$20</div>
              </div>
        </div>
  )
}

export default LineChart2