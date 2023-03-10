import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='70326c9b-4a0f-429b-9c76-792941e326d5'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Some</span>
            </span>{' '}
            Important Questions Answer For The Job Contest
          </h2>
          
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto'>
        <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What React Router Used For?
              </p>
              <p className='text-gray-700'>
              React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              How Does Context API Work?
              </p>
              <p className='text-gray-700'>
              The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              How does useRef Work in React?
              </p>
              <p className='text-gray-700'>
              useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a ???box??? that can hold a mutable value in its .current property.
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What React Router Used For?
              </p>
              <p className='text-gray-700'>
              React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              How Does Context API Work?
              </p>
              <p className='text-gray-700'>
              The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              How does useRef Work in React?
              </p>
              <p className='text-gray-700'>
              useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a ???box??? that can hold a mutable value in its .current property.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;