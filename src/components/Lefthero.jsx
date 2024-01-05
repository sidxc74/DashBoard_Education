import React from 'react'
import Navbar from './Navbar'
import './lefthero.css'
import CurvedLineChart from './Linechart';
import Revenuechart from './Revenuechart';
import Barchart from './Barchart';
import Circlechart from './Circlechart';
import LineChart2 from './LineChart2';
import Last from './Last';


function Lefthero({handleClick}) {

    const dummyData = [
        { name: 'Product 1', category: 'Category A', sale: '100', rating: '⭐4.5', earning: '$1000', visitor: 500, image :'./user.svg' },
        { name: 'Product 2', category: 'Category B', sale: '200', rating: '⭐4.8', earning: '$1500', visitor: 700, image :'./user.svg' },
        { name: 'Product 3', category: 'Category C', sale: '150', rating: '⭐4.8', earning: '$1200', visitor: 600, image :'./user.svg' },
        { name: 'Product 4', category: 'Category A', sale: '180', rating: '⭐4.8', earning: '$2000', visitor: 800, image :'./user.svg' },
        { name: 'Product 5', category: 'Category B', sale: '90', rating: '⭐4.8', earning: '$800', visitor: 400, image :'./user.svg' },
        { name: 'Product 6', category: 'Category C', sale: '120', rating: '⭐4.8', earning: '$1800', visitor: 900, image :'./user.svg' },
        { name: 'Product 7', category: 'Category A', sale: '160', rating: '⭐4.8', earning: '$1500', visitor: 750, image :'./user.svg' },
        { name: 'Product 8', category: 'Category B', sale: '220', rating: '⭐4.8', earning: '$2500', visitor: 1000, image :'./user.svg' },
        
      ];

      

  return (
    <div className='min-h-[100vh] w-[100%] text-black '>
        <Navbar handleClick={handleClick}/>
        
          <div className='Upperchart mt-16'>
           <CurvedLineChart />
           <CurvedLineChart />
           <CurvedLineChart />
           <CurvedLineChart />
          </div>
          <div className='layer2 mt-16'>
          <Revenuechart />
          <Barchart />
          </div>
          <div className='layer3 mt-16'>
            <Circlechart />
            <LineChart2 />
            <Last />
          </div>
        
        
        
        <div className="overflow-x-scroll my-20 mx-20  ">
  <table className="min-w-full border-collapse border-t-0 border border-gray-300">
    <thead className="bg-gray-300">
      <tr>
        <th className="py-2 px-4">Name</th>
        <th className="py-2 px-4">Category</th>
        <th className="py-2 px-4">Sale</th>
        <th className="py-2 px-4">Rating</th>
        <th className="py-2 px-4">Earning</th>
        <th className="py-2 px-4">Visitor</th>
      </tr>
    </thead>
    <tbody>
      {dummyData.map((data, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
          <td className="py-2 px-4">
            <div className="flex items-center">
              <img src={data.image} alt={data.name} className="w-8 h-8 mr-2 object-cover" />
              {data.name}
            </div>
          </td>
          <td className="py-2 px-4">{data.category}</td>
          <td className="py-2 px-4">{data.sale}</td>
          <td className="py-2 px-4">{data.rating}</td>
          <td className="py-2 px-4">{data.earning}</td>
          <td className="py-2 px-4">{data.visitor}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
        
  )
}

export default Lefthero