import React, { useState } from 'react';

function Navbar({ handleClick }) {
  const [searchVisible, setSearchVisible] = useState(true);

  const handleToggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between pl-4 pr-2 py-4'>
      <div className='flex gap-2 items-center'>
        <button className='font-semibold ' onClick={() => handleClick()}>
          ☰
        </button>
        <h3>HI SIDAK ✋</h3>
      </div>
        <input
          className='border-none w-full lg:w-72 bg-slate-100 h-8 mt-4 lg:mt-0 lg:ml-4'
          placeholder='Start Typing.....'
        />
      <div className='flex gap-4 items-center mt-4 lg:mt-0'>
        <button className='bg-orange-500 p-2 rounded-md text-white'>⇫ New Upload</button>
        <button className='w-8 font-extrabold bg-slate-100'>🔔</button>
        <button className='w-8 font-extrabold bg-slate-100'>✉</button>
        <button className='w-8 font-extrabold bg-slate-100'>〽</button>
        <button className='w-32 flex items-center gap-2'>
          <div className='hidden lg:flex lg:flex-col  w-16s gap-1'>
            <h3 className='font-semibold'>The Sid</h3>
            <span className='font-extralight text-gray-400'>Designer</span>
          </div>
          <img className='w-8 h-8 ml-2' src="./user.svg" alt="User" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
