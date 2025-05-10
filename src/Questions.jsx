import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

function Questions({ data, activeIndex, handleClick }) {
  return (
    <>
      {data.map((ele, idx) => (
        <div key={idx} className='w-full mt-4'>
          <h1 className='flex gap-4 justify-start items-center qu font-bold text-xl context'>
            <div className='cursor-pointer' onClick={() => handleClick(idx)}>
              {activeIndex === idx ? <FaMinus /> : <FaPlus />}
            </div>
            {ele.title}
          </h1>

          {activeIndex === idx && (
            <p className='mt-4 context text-gray-500'>{ele.info}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default Questions;
