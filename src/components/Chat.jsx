import React from 'react';

const Chat = ({ pp, contact, msg, time, unreadMsgs, active }) => {
  return (
    <div className=' hover:bg-[#2a3942] flex items-center justify-between h-[72px] cursor-pointer w-full '>
      {/* Profile Container */}

      <div className='flex items-center pl-[15px] pr-[13px] '>
        <img src={pp} alt='' className='w-[50px] h-[50px] rounded-full' />
      </div>

      {/* Profile Container */}
      {/* InfoContainer */}
      <div className='flex-1 flex flex-col justify-center h-full pr-[15px] border-b border-[#2a3942] min-w-0  '>
        {/* Time and number of messages */}
        <div className='flex items-center justify-between text-left mb-1'>
          <p className='text-white font-bold text-base'>{contact}</p>
          <p className=' text-xs font-bold text-emerald-500'>{time}</p>
        </div>
        <div className='flex items-center justify-between relative'>
          <p className='text-[#c1c1c1] text-sm truncate '>{msg}</p>
          {unreadMsgs > 0 ? (
            <p className='inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-emerald-500 rounded-full'>
              {unreadMsgs}
            </p>
          ) : null}

        </div>
      </div>
    </div>
  );
};

export default Chat;
