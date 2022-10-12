import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, logo, name, total, } = quiz
    return (
       
        <div className='h-[450px] p-2 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className=' bg-slate-400 w-full h-56 md:h-64 xl:h-80'
            src={logo}
            alt=''
          />
         <div>
         <div className=''>
            <p className='mb-8 text-lg font-bold text-center text-black-100'>{name} | total{total} </p>
        
          </div>

          <Link to= {`/quiz/${id}`} className=' bg-yellow-200 rounded-lg p-4 m-12 shadow-lg  hover:shadow-2xl'>Start Practice</Link>
         </div>
        </div>

    )
  }

export default Quiz;