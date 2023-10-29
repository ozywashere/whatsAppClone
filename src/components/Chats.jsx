import Chat from './Chat';
import { useEffect, useState } from 'react';
import React from 'react';
import { chatsData } from '../../data/wp';

const Chats = ({ filter }) => {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter ? chatsData.filter((chat) => chat.unreadMsgs) : chatsData;
    setChats(newChats);
  }, [filter]);

  return (
    //main container
    <div className='flex flex-col hover:overflow-y-auto cursor-pointer'>
      {/* Archived Container */}
      <div className='flex justify-between items-center min-h-[60px] px-3  border-transparent '>
        <div className='mr-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 28 28'
            strokeWidth='1'
            stroke='currentColor'
            className='fill-emerald-500 stroke-[#3c454c] w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
            />
          </svg>
        </div>
        <div className='flex-1 flex items-center justify-between'>
          <p className='text-white font-sans'>Archived</p>
          <p className='text-emerald-500 font-light text-sm'>1</p>
        </div>
      </div>
      {/*Chats  */}
      <div>
        {chats.map((chat) => {
          return <Chat {...chat} />;
        })}
      </div>
    </div>
  );
};

export default Chats;
