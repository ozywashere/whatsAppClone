import React from 'react';
import RoundedBtn from './common/RoundedBtn';
import { useState } from 'react';
import Chats from './Chats';

const MeetSvg = () => {
  return (
    <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' className='' fill='none'>
      <circle cx='12' cy='12' r='6' fill='currentColor'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 12C20 12.9267 19.8424 13.8166 19.5526 14.6444C19.3824 15.1305 19.5352 15.6866 19.9709 15.9613C20.4736 16.2782 21.1446 16.0964 21.3551 15.5406C21.7719 14.44 22 13.2466 22 12C22 7.15998 18.5615 3.12307 13.9941 2.19883C13.4118 2.08101 12.9 2.55153 12.9 3.14558C12.9 3.66061 13.2896 4.08652 13.7916 4.20139C17.3473 5.0149 20 8.19767 20 12ZM12 20C14.2014 20 16.1951 19.1108 17.6416 17.672C18.0063 17.3094 18.5733 17.208 19.0083 17.4823C19.5115 17.7995 19.6362 18.4841 19.2249 18.9138C17.4045 20.8156 14.8406 22 12 22C9.13243 22 6.54677 20.793 4.72334 18.8594C4.31526 18.4266 4.44515 17.7429 4.95068 17.4295C5.38777 17.1585 5.95401 17.2641 6.31591 17.6295C7.76573 19.0933 9.77697 20 12 20ZM3.9996 15.9013C4.43726 15.63 4.59424 15.075 4.42776 14.5877C4.15046 13.776 4 12.9056 4 12C4 8.19767 6.65269 5.0149 10.2084 4.20139C10.7104 4.08652 11.1 3.66061 11.1 3.14558C11.1 2.55153 10.5882 2.08101 10.0059 2.19883C5.4385 3.12307 2 7.15998 2 12C2 13.2201 2.21851 14.3892 2.61853 15.4702C2.82479 16.0276 3.49447 16.2145 3.9996 15.9013ZM12.0438 2.00009L12 2L11.9562 2.00009H12.0438Z'
        fill='currentColor'></path>
    </svg>
  );
};
const GroupsSvg = () => {
  return (
    <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' className='' fill='none'>
      <g clipPath='url(#clip0_20095_12594)'>
        <path
          d='M4.7595 14.0357C4.65644 14.0313 4.55139 14.029 4.44446 14.029C3.65152 14.029 2.96238 14.1558 2.41872 14.3088C1.95159 14.4403 1.42115 14.656 0.975466 14.9996C0.521192 15.3498 0.107939 15.8739 0.0263682 16.5959C-0.0117388 16.9332 2.95136e-05 17.6554 0.00922726 18.0644C0.0256195 18.7935 0.623061 19.3623 1.33916 19.3623H4.31303C4.13562 18.9875 4.03074 18.5698 4.01771 18.1256C4.00494 17.6905 3.97075 16.5163 4.05525 15.893C4.09928 15.5682 4.17628 15.2639 4.27738 14.982C4.40496 14.6263 4.57082 14.3123 4.7595 14.0357Z'
          fill='currentColor'></path>
        <path
          d='M19.6869 19.3623H22.6608C23.3769 19.3623 23.9744 18.7935 23.9908 18.0644C24 17.6554 24.0117 16.9332 23.9736 16.5959C23.8921 15.8739 23.4788 15.3498 23.0245 14.9996C22.5788 14.656 22.0484 14.4403 21.5813 14.3088C21.0376 14.1558 20.3485 14.029 19.5555 14.029C19.4486 14.029 19.3435 14.0313 19.2405 14.0357C19.4291 14.3123 19.595 14.6263 19.7226 14.982C19.8237 15.2639 19.9007 15.5682 19.9447 15.893C20.0292 16.5163 19.995 17.6905 19.9822 18.1256C19.9692 18.5698 19.8643 18.9875 19.6869 19.3623Z'
          fill='currentColor'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.52831 13.6265C9.36687 13.3837 10.5649 13.1401 12 13.1401C13.4351 13.1401 14.6331 13.3837 15.4716 13.6265C15.9039 13.7517 16.4206 13.9288 16.8826 14.2131C17.352 14.5019 17.8167 14.934 18.0492 15.5821C18.1097 15.751 18.1563 15.9344 18.183 16.1318C18.243 16.5742 18.22 17.5691 18.2052 18.0735C18.184 18.7987 17.5884 19.3623 16.8756 19.3623H7.12434C6.41155 19.3623 5.81599 18.7987 5.79472 18.0735C5.77992 17.5691 5.75694 16.5742 5.81691 16.1318C5.84367 15.9344 5.89021 15.751 5.95079 15.5821C6.18324 14.934 6.64793 14.5019 7.11736 14.2131C7.57933 13.9288 8.09602 13.7517 8.52831 13.6265Z'
          fill='currentColor'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.8889 9.97001C16.8889 8.49726 18.0828 7.31001 19.5555 7.31001C21.0283 7.31001 22.2222 8.49726 22.2222 9.97001C22.2222 11.4428 21.0283 12.64 19.5555 12.64C18.0828 12.64 16.8889 11.4428 16.8889 9.97001Z'
          fill='currentColor'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.44443 8.20001C8.44443 6.23634 10.0363 4.64001 12 4.64001C13.9636 4.64001 15.5555 6.23634 15.5555 8.20001C15.5555 10.1637 13.9636 11.75 12 11.75C10.0363 11.75 8.44443 10.1637 8.44443 8.20001Z'
          fill='currentColor'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.77777 9.97001C1.77777 8.49726 2.97168 7.31001 4.44444 7.31001C5.91719 7.31001 7.1111 8.49726 7.1111 9.97001C7.1111 11.4428 5.91719 12.64 4.44444 12.64C2.97168 12.64 1.77777 11.4428 1.77777 9.97001Z'
          fill='currentColor'></path>
      </g>
      <defs>
        <clipPath id='clip0_20095_12594'>
          <rect width='24' height='24' fill='10101'></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
const ChannelSvg = () => {
  return (
    <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' className='' fill='none'>
      <path
        d='M21.9218 10.6469C21.321 6.08949 17.5557 2.45561 12.9894 2.04404C7.06124 1.50197 2.16447 6.05937 2.05432 11.982C2.01426 14.1101 2.82538 15.9371 3.23595 16.7201L2.0443 20.6651C1.81398 21.4281 2.52497 22.1408 3.28602 21.9099L7.17139 20.7455C8.65344 21.5686 10.3157 22.0002 12.0181 22.0002C17.9663 22.0002 22.7129 16.7602 21.9118 10.6469H21.9218ZM8.06262 14.6823C8.333 15.0838 8.30296 15.6259 7.96249 15.9672C7.51186 16.429 6.76082 16.3386 6.40033 15.7966C5.66931 14.7124 5.23872 13.3974 5.23872 11.992C5.23872 10.5867 5.69936 9.17125 6.49045 8.057C6.84093 7.56512 7.57195 7.53501 8.00254 7.96665C8.35302 8.318 8.38307 8.86007 8.10268 9.2616C7.56193 10.0346 7.2515 10.9782 7.2515 11.992C7.2515 13.0059 7.56193 13.9093 8.08265 14.6723L8.06262 14.6823ZM12.0682 13.4978C11.237 13.4978 10.5661 12.8252 10.5661 11.992C10.5661 11.1588 11.237 10.4863 12.0682 10.4863C12.8993 10.4863 13.5702 11.1588 13.5702 11.992C13.5702 12.8252 12.8993 13.4978 12.0682 13.4978ZM17.5257 15.9471C17.1752 16.439 16.4442 16.4691 16.0236 16.0375C15.6731 15.6861 15.6431 15.1441 15.9235 14.7425C16.4642 13.9696 16.7847 13.0159 16.7847 12.0021C16.7847 10.9882 16.4542 10.0145 15.9035 9.24152C15.6131 8.82995 15.6331 8.27784 15.9836 7.91646C16.4042 7.49485 17.1252 7.51493 17.4857 8.00681C18.3068 9.1311 18.7875 10.5064 18.7875 12.0121C18.7875 13.5179 18.3168 14.8429 17.5257 15.9572V15.9471Z'
        fill='currentColor'></path>
    </svg>
  );
};

const NewChatSvg = () => {
  return (
    <svg viewBox='0 0 24 24' height='24' width='24' preserveAspectRatio='xMidYMid meet' className='' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.16667 3.75C3.69391 3.75 2.5 4.94391 2.5 6.41667V17.5833C2.5 19.0561 3.69391 20.25 5.16667 20.25H18.8333C20.3061 20.25 21.5 19.0561 21.5 17.5833V8.75L23.7458 5.29499C24.1782 4.62974 23.7008 3.75 22.9073 3.75H5.16667ZM14.9672 12.9911H12.9914V14.9671C12.9914 15.3999 12.7366 15.8175 12.3238 15.9488C11.6391 16.1661 11.009 15.6613 11.009 15.009V12.9911H9.03279C8.59949 12.9911 8.1819 12.7358 8.05099 12.3226C7.83412 11.6381 8.33942 11.0089 8.99134 11.0089H11.009V9.03332C11.009 8.60007 11.2639 8.18252 11.6767 8.05119C12.3609 7.83391 12.9914 8.33872 12.9914 8.991V11.0089H15.0091C15.6606 11.0089 16.1659 11.6381 15.949 12.3226C15.8185 12.7358 15.4005 12.9911 14.9672 12.9911Z'
        fill='currentColor'></path>
    </svg>
  );
};
const MoreVertTwoToneIcon = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      height='24'
      width='24'
      preserveAspectRatio='xMidYMid meet'
      className=''
      version='1.1'
      x='0px'
      y='0px'
      enableBackground='new 0 0 24 24'>
      <path
        fill='currentColor'
        d='M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z'></path>
    </svg>
  );
};

const UnreadMsg = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      height='24'
      width='24'
      className=''
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      version='1.1'
      x='0px'
      y='0px'
      enableBackground='new 0 0 24 24'>
      <path fill='currentColor' d='M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z'></path>
    </svg>
  );
};
const SearchIcon = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      height='24'
      width='24'
      preserveAspectRatio='xMidYMid meet'
      className='text-[#8796a1] width-[24px] height-[24px]'
      version='1.1'
      x='0px'
      y='0px'
      enableBackground='new 0 0 24 24'>
      <path
        fill='currentColor'
        d='M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z'></path>
    </svg>
  );
};
const profileImg =
  'https://pps.whatsapp.net/v/t61.24694-24/328065035_738793597625910_2663062141651563377_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSL6z6MNMQGKe8s2d6QBagLmhXXqui5EsTisRDVqRgYsA&oe=65464EDF&_nc_sid=000000&_nc_cat=102';
const LeftMenu = () => {
  const [filter, setFilter] = useState(false);
  //left menu
  return (
    <div className='flex flex-col border-r border-neutral-200 h-full w-full '>
      {/* profile */}
      <div className=' h-[60px] flex justify-between items-center bg-[#202d33] px-[10px] py-4 w-full'>
        <div className='flex-1 '>
          <div className='h-[40px] w-[40px] cursor-pointer'>
            <img src={profileImg} alt='profile image' className='w-full rounded-full' />
          </div>
        </div>
        <div className='flex-1 '>
          <div className='flex justify-between items-center'>
            <RoundedBtn icon={<GroupsSvg />} />
            <RoundedBtn icon={<MeetSvg />} />
            <RoundedBtn icon={<ChannelSvg />} />
            <RoundedBtn icon={<NewChatSvg />} />
            <RoundedBtn icon={<MoreVertTwoToneIcon />} />
          </div>
        </div>
      </div>
      {/* Search and filter */}
      <div className='h-[60px] py-4 flex justify-between items-center w-full pl-[12px] pr-0'>
        <div className='flex justify-between items-center w-full '>
          <div className='relative flex-1'>
            <input
              placeholder='Search or start new chat'
              className='block w-full h-[40px] pr-8 pl-16 text-sm rounded-md outline-none focus:outline-none bg-[#202d33] text-[#8796a1]'
            />
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <SearchIcon />
            </span>
          </div>
          <button
            onClick={() => setFilter(!filter)}
            className={`${
              filter ? 'bg-emerald-500 text-white' : 'text-[#8796a1] hover:bg-[#3c454c]'
            } mx-2 p-1 rounded-full transition-all duration-200`}>
            <UnreadMsg />
          </button>
        </div>
      </div>
      {/* Chats */}

      <Chats filter={filter} />
    </div>
  );
};

export default LeftMenu;
