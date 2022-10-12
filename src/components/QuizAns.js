import { list } from 'postcss';
import React from 'react';

const QuizAns = ({question}) => {
    const {question:qz, options, correctAnswer, id} = question;
    console.log(correctAnswer)
    
    return (
        <div className='border-4 border-red-400 p-3 my-3'>
            <h1>Quiz: {qz}</h1>
            <div>
                {
                    options.map(option =>
                    <li option= {option} className='border-3 border-blue-300 p-3 hover:bg-orange-800 text-center'> {option}</li>
                    )
                }
            </div>
        </div>
    );
};

export default QuizAns;