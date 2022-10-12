import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, logo, name, total, } = quiz
    return (
       
        <div className='h-[480px] p-2 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className=' bg-slate-400 w-full h-56 md:h-64 xl:h-80'
            src={logo}
            alt=''
          />
         <div className=' items-center'>
         <div className=''>
            <p className='mb-8 text-lg font-bold text-left text-black-100 mt-5'>{name} | total{total} </p>
        
          </div>

          <Link to= {`/quiz/${id}`} className='inline-flex items-center justify-center w-full h-12 px-6 mb-20 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'>Start Practice</Link>
         </div>
        </div>

    )
  }

export default Quiz;