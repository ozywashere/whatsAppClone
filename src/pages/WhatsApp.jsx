import LeftMenu from '../components/LeftMenu';
import ChatDetail from '../components/ChatDetail';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
const WhatsApp = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loading = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 1;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(loading);
  }, [progress]);

  return (
    <>
      {loading ? (
        <Loading progress={progress} />
      ) : (
        <div className='w-screen h-screen overflow-hidden'>
          <div className='flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen scroll'>
            <div className='bg-[#111a21] min-w-[340px] max-w-[500px] w-full h-full '>
              <LeftMenu />
            </div>
            {/* Chat Detail */}
            <div className=' bg-[#222f35] min-w-[415px] max-w-[1120px] w-full h-full'>
              <ChatDetail />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsApp;
