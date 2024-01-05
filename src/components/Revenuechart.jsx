import React from 'react';
import { AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';

function Revenuechart() {
  const linedata = [
    { "month": "Jan", "visits": 0, "sales": 0 },
    { "month": "Feb", "visits": 20, "sales": 30 },
    { "month": "Mar", "visits": 15, "sales": 10 },
    { "month": "Apr", "visits": 45, "sales": 5 },
    { "month": "May", "visits": 10, "sales": 40 },
    { "month": "Jun", "visits": 42, "sales": 35 },
    { "month": "Jul", "visits": 65, "sales": 80 },
    { "month": "Aug", "visits": 45, "sales": 70 },
    { "month": "Sep", "visits": 20, "sales": 45 },
    { "month": "Oct", "visits": 70, "sales": 60 },
    { "month": "Nov", "visits": 10, "sales": 50 },
    { "month": "Dec", "visits": 65, "sales": 60 }
  ];

  return (
    <div className='flex flex-col font-semibold'>
      <div className='flex justify-between px-2'>
        <p>Revenue</p>
        <div className='flex gap-4'>
          <div className='flex items-center justify-between gap-1'>
            <p>Course visits</p>
            <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <p>Course sales</p>
            <div className='w-2 h-2 bg-orange-600 rounded-full'></div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width='100%' aspect={4}>
        <AreaChart data={linedata}>
          <defs>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='month' />
          <YAxis dataKey='sales' />
          <Area type='monotone' dataKey='visits' stroke="purple" fill="url(#colorPurple)" />
          <Area type='monotone' dataKey='sales' stroke="red" fill='transparent' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Revenuechart;
