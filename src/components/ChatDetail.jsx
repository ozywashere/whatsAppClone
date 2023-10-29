import { useState, useRef, useEffect } from 'react';
import RoundedBtn from './common/RoundedBtn';

import { HiDotsVertical } from 'react-icons/hi';
import { cs1 } from '../assets/wp';
import { BsFillMicFill } from 'react-icons/bs';
import { messagesData } from '../../data/wp';

import Message from './Message';
const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

const ChatDetail = () => {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const handleEmojiClick = () => {
    inputRef.current.value += '✨';
    inputRef.current.focus();
  };

  const handleImgUpload = () => {
    addMessage({
      img: cs2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const msg = {
      id: messages.length + 1,
      msg: inputRef.current.value,
      time: getTime(),
      sent: true,
    };
    addMessage(msg);
    inputRef.current.value = '';
    inputRef.current.focus();
    setTyping(false);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') handleInputSubmit();
    };

    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  });
  return (
    <div className='flex flex-col h-screen '>
      {/* Header */}
      <div className='flex justify-between bg-[#202d33] h-[60px] px-4 py-[10px]'>
        {/* Contact Info */}
        <div className='flex items-center'>
          <img src={cs1} alt='' className='w-[40px] h-[40px] rounded-full object-cover' />
          <div className='flex flex-col ml-[10px]'>
            <span className='text-[#aebac1] font-medium'>Durdu</span>
            <span className='text-[#8796a1] text-xs'>Online</span>
          </div>
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-2'>
          <div className='border border-[#54656f] shadow border-opacity-50 rounded-full px-[10px]  py-[5px]'>
            <button className='flex items-center'>
              <span className='text-[#aebac1] mr-[6px]'>
                <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' class='' fill='none'>
                  <path
                    d='M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z'
                    fill='currentColor'></path>
                  <path
                    d='M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z'
                    fill='currentColor'></path>
                </svg>
              </span>
              <span className='text-[#54656f]'>
                <svg
                  viewBox='0 0 17 13'
                  height='24'
                  width='24'
                  preserveAspectRatio='xMidYMid meet'
                  class=''
                  version='1.1'
                  x='0px'
                  y='0px'
                  enable-background='new 0 0 17 13'>
                  <path fill='currentColor' d='M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z'></path>
                </svg>
              </span>
            </button>
          </div>
          <RoundedBtn icon={<MdSearch />} size={24} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/*Center Section*/}
      <div className="flex-1 bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain  overflow-y-auto scroll-m-0 p-3 h-full">
        {messages.map((message) => {
          return <Message {...message} />;
        })}
      </div>
      {/*Footer Section*/}
      <div className='flex items-center bg-[#202c33] py-[5px] px-4 h-[60px]'>
        <div className='flex items-center py-[5px]'>
          <button onClick={handleEmojiClick}>
            <span className='text-[#aebac1]'>
              <svg
                viewBox='0 0 24 24'
                height='26'
                width='26'
                preserveAspectRatio='xMidYMid meet'
                className='mx-2'
                version='1.1'
                x='0px'
                y='0px'
                enable-background='new 0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z'></path>
              </svg>
            </span>
          </button>
          <span className='text-[#aebac1] p-2' onClick={handleImgUpload}>
            <svg viewBox='0 0 24 24' height='26' width='26' preserveAspectRatio='xMidYMid meet' class='' fill='none'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z'
                fill='currentColor'></path>
            </svg>
          </span>
        </div>

        <div className='flex flex-1 items-center mx-3'>
          <input
            type='text'
            placeholder='Type a message'
            className='w-full bg-[#2c3943] outline-none text-[#aebac1]  rounded-lg py-2 px-3'
            ref={inputRef}
            onChange={handleInputChange}
          />
          <span className='ml-2'>
            {typing ? <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} /> : <RoundedBtn icon={<BsFillMicFill />} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
