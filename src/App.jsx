import React, { useState } from 'react';
import Questions from './Questions';
import Data from './Data';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <h1 className='text-black text-4xl font-bold text-center mt-12 underline context heading'>
        Accordion
      </h1>

      <div className='w-3/4 h-max py-4 mx-auto mt-16'>
        <Questions
          data={Data}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
