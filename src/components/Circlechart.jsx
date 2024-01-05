import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function Circlechart() {

  const data = [
    { name: 'Current week', value: 600  },
    { name: 'Last week', value: 600 },
  ];
  const COLORS = ['purple', 'orange'];

  return (
    <div className='flex flex-col p-4 gap-3'>
      <div className='flex justify-between'>
        <p className='font-bold text-purple-900'>Sale</p>
        <p className='font-bold text-black'>:</p>
      </div>
      <div className='h-1 bg-gray-300'></div>
      <ResponsiveContainer width='100%' aspect={2} >
        <PieChart  width='300px' onMouseEnter={() => {}}>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex justify-between items-center'>
        <p>currentweek</p>
        <p>2000</p>
        <p className='text-green-600'>+0.20%</p>
      </div>
      <div className='flex justify-between items-center'>
        <p>currentweek</p>
        <p>1500</p>
        <p className='text-red-600'>-0.16%</p>
      </div>
    </div>
  );
}

export default Circlechart;
