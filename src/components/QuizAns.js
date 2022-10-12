
import React from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizAns = ({question}) => {
    const {question:qz, options, correctAnswer, id} = question;
    const eye = (params)=>{
        toast.success( correctAnswer)
    }
    const notify = (option) => {

    if (option==correctAnswer){
        toast.success('right')
    }
    else {
        // toast.wrong('wrong')
        toast('wrong')
    }
}
    



    
    return (
        <div className='m-20 border-4 bg-blue-500 p-3 my-3 '>
            <div><img onClick={eye} className='w-5' src="https://i.ibb.co/vZs8PrP/eye-slash-solid.png" alt="eye-slash-solid" border="0"/></div>
            <h1 className='mb-4 text-2xl font-medium text-center text-white'>Quiz: {qz}</h1>
            <div >
                {
                    options.map(option =>
                <li onClick={()=>notify(option)} option= {option} className='border-3 border-blue-300 p-3 hover:bg-slate-400 text-center text-white'> {option}
                </li>
                    )
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizAns;