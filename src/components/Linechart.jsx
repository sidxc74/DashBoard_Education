import React from 'react';
import { ResponsiveContainer,LineChart,Line} from 'recharts';

const CurvedLineChart = () => {
  
  

    // Sample data with curves
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
  
  
  
              <div className='flex p-6 items-center justify-between border-purple-900'>
              <p className='font-bold text-center'>Total Empressions <br /> 832</p>
              <ResponsiveContainer width='30%' aspect={2}>
              <LineChart data ={linedata}>
             
              <Line  type='monotone' dot={false} dataKey='y' stroke='purple'/>
             
              </LineChart>
              </ResponsiveContainer>
           `  </div>
  
  
  
  
  
  )
};



export default CurvedLineChart;
