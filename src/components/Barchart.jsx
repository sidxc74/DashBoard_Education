import React from 'react'
import { Bar,ResponsiveContainer,BarChart,XAxis,YAxis } from 'recharts'

function Barchart() {

    const linedata = [
      { "day": "Mon", "visitors": 10 },
      { "day": "Tue", "visitors": 30 },
      { "day": "Wed", "visitors": 20 },
      { "day": "Thu", "visitors": 40 },
      { "day": "Fri", "visitors": 50 },
      { "day": "Sat", "visitors": 25 },
      { "day": "Sun", "visitors": 15 }
    ]
    

  return (
    <div className='flex flex-col font-semibold gap-2'>
            <div className='flex justify-between px-2 font-bold'>
                <p>sales</p>
                <p>𓃊</p> 
            </div>
            <ResponsiveContainer width='100%' aspect={1.3}>
              <BarChart data={linedata} margin='20rem'>
               <XAxis dataKey='day' />
                <Bar   dataKey='visitors' fill="purple" barSize={15} />
                <YAxis dataKey='visitors' /> 
              </BarChart>
            </ResponsiveContainer>   
            </div>
  )
}

export default Barchart
    
    