import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, logo, name, total, } = quiz
    return (
      <a href={`../quiz/${id}`} aria-label='View Item'>
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className=' bg-slate-400 w-full h-56 md:h-64 xl:h-80'
            src={logo}
            alt=''
          />
          <div className=''>
            <p className='mb-4 text-lg font-bold text-black-100'>{name}</p>
            <br />
            <p className='text-sm tracking-wide text-black-300'>Price: {total}</p>
          </div>
          <button className='m-4 bg-yellow-200 p-4'>Start Practice</button>
        </div>
      </a>
    )
  }

export default Quiz;