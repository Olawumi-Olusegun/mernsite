import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';
import PageLoader from '../../components/PageLoader';

const MainLayout = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  if(isLoading) {
    return <PageLoader />
  }

  return (
    <div className=' w-full min-h-dvh grid grid-rows-[auto_1fr_auto] bg-gray-100'>
        <Header2 />
        <main className='w-full'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout