import React from 'react';

const RoundedBtn = ({ icon, onClick }) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClick}
        className='text-[#8796a1] text-xl p-2.5  hover:bg-[#3c454c] transition-colors duration-200 h-10 w-10 rounded-full flex items-center justify-center'>
        {icon}
      </button>
    </div>
  );
};

export default RoundedBtn;
