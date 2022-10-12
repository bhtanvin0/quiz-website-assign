import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {
    const loaderData = useLoaderData()
    const quizsData = loaderData.data
    
    return (
        <div>
            
<div class="bg-white dark:bg-gray-800 overflow-hidden relative m-20">
    <div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
            Ensure that you are aware
            </span>
            <span class="block text-indigo-500">
                It&#x27;s today or never.
            </span>
        </h2>
        
    </div>
    <img src="https://i.natgeofe.com/k/f5b0d18e-78f4-4697-bd3f-509aaa3bf606/1900x1068_herolead_quiz_square.jpg" class="absolute h-full w-1/4 hidden lg:block right-0 top-0"/>
</div>



            <div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {quizsData.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
        </div>
      
    );
};

export default Home;