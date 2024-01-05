import React from 'react';

function Sidebar({hide}) {
  return (
    <div className={`bg-[#5d5892]  ${hide ? 'hidden' : ''}`}>
      <div className='flex flex-col justify-between items-center mx-6 gap-6 text-white'>
        <div className='flex mt-12 items-center gap-1'>
          <img src='./logo.webp' alt='logo' className='w-8 h-8 object-cover' />
          <h2 className='font-bold font-serif'>Skillify Admin</h2>
        </div>

        <NavItem icon='./icon1.svg' text='Dashboard' />
        <NavItem icon='./icon1.svg' text='My Course' />
        <NavItem icon='./icon1.svg' text='Calendar' />
        <NavItem icon='./icon1.svg' text='Resource' />
        <NavItem icon='./icon1.svg' text='Quiz' />
        <NavItem icon='./icon1.svg' text='Message' />
        <img src="./SIDE.SVG.svg" className='w-[200px] h-[300px] object-cover'></img>
        <p className='text-center'>Copyrights 2023 Sidak Chuchra</p>
      </div>
    </div>
  );
}

function NavItem({ icon, text }) {
  return (
    <div className={`flex w-40 p-2 h-12 rounded-md justify-between items-center  gap-10 ${text==='Dashboard' ? 'bg-white text-black' : ''} `}>
      <div className='flex items-center gap-4'>
        <img src={icon} className='w-4 h-4 object-cover' alt='icon' />
        <p>{text}</p>
      </div>
      <button>➤</button>
    </div>
  );
}

export default Sidebar;


