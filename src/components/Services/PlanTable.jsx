import React from 'react'

// Map through two services and display information in structure

const ServicesTable = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className='services-list__fallback'>
        There are no available services at this time
      </h2>
    )
  }

  return (
    <table className='table-auto h-1/2 w-full md:w-4/5 mx-auto border-2  shadow-2xl'>
      <thead class='text-white '>
        <tr>
          <th className='py-3 bg-black'>Title</th>
          <th className='py-3 bg-black'>Description</th>
          <th className='py-3 bg-black'>Starting Cost</th>
          <th className='py-3 bg-black'>Discount</th>
          <th className='py-3 bg-black'>Refund?</th>
        </tr>
      </thead>
      <tbody>
        <tr className=' hover:bg-zinc-100 hover:scale-105 bg-zinc-200 text-center cursor-pointer duration-300'>
          <td className='py-2'>{props.items[0].title}</td>
          <td className='py-2'>{props.items[0].feature3}</td>
          <td className='py-2'>{props.items[0].startingCost}</td>
          <td className='py-2'>{props.items[0].discount}</td>
          <td className='py-2'>{props.items[0].disclaimer}</td>
        </tr>
        <tr className=' hover:bg-zinc-100 hover:scale-105 bg-zinc-300 text-center cursor-pointer duration-300'>
          <td className='py-2'>{props.items[1].title}</td>
          <td className='py-2'>{props.items[1].feature3}</td>
          <td className='py-2'>{props.items[1].startingCost}</td>
          <td className='py-2'>{props.items[1].discount}</td>
          <td className='py-2'>{props.items[1].disclaimer}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ServicesTable
