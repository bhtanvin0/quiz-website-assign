import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAns from './QuizAns';

const Prectice = () => {
    const qusAns = useLoaderData()
    const precticeData = qusAns.data

    const {id, name, questions} = precticeData;

    return (
        <div>
            {
                questions.map(question=> <QuizAns
                    question={question}
                ></QuizAns>)
            }
        </div>
    );
};

export default Prectice;