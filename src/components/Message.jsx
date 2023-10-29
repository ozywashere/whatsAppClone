const Message = (props) => {
  const { msg, time, sent, isLink, img } = props;
  //message Container
  return (
    <div
      className={`flex justify-center items-center rounded-md text-[#e9edef] p-2 w-fit my-2 ${
        sent ? 'ml-auto bg-[#005c4b]' : 'mr-auto bg-[#202d33]'
      }`}>
      {img ? (
        <div className='relative w-full'>
          <img src={img} alt='' className='max-w-[270px] rounded-full object-cover' />
          <p className='absolute right-0 -bottom-2 text-[#e9edef]'>{time}</p>
        </div>
      ) : (
        <div className='flex justify-between items-end max-w-[400px] break-all'>
          {isLink ? (
            <a href='#!' className='text-[#53beec] hover:underline hover:underline-offset-4'>
              {msg}
            </a>
          ) : (
            <p className='text-sm mr-2 flex'>{msg}</p>
          )}
          <p className='text-[#8796a1] text-xs min-w-[50px]'>{time}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
