
import React from 'react';

const QuizAns = ({question}) => {
    const {question:qz, options, correctAnswer, id} = question;
    
    return (
        <div className='m-20 border-4 bg-blue-500 p-3 my-3 '>
            <h1 className='mb-4 text-xl font-medium text-center text-white'>Quiz: {qz}</h1>
            <div >
                {
                    options.map(option =>
                    <li option= {option} className='border-3 border-blue-300 p-3 hover:bg-slate-400 text-center text-white'> {option}</li>
                    )
                }
            </div>
        </div>
    );
};

export default QuizAns;