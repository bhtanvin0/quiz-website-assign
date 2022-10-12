
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizAns = ({question}) => {
    const {question:qz, options, correctAnswer, id} = question;
    const notify = () => toast("Wow so easy!");

    if (question.correctAnswer){
        toast.success('right')
    }
    else {
        toast.wrong('wrong')
    }



    
    return (
        <div className='m-20 border-4 bg-blue-500 p-3 my-3 '>
            <BeakerIcon className="h-6 w-6 text-blue-500"/>
            <h1 className='mb-4 text-2xl font-medium text-center text-white'>Quiz: {qz}</h1>
            <div >
                {
                    options.map(option =>
                <li onClick={notify} option= {option} className='border-3 border-blue-300 p-3 hover:bg-slate-400 text-center text-white'> {option}
                </li>
                    )
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizAns;