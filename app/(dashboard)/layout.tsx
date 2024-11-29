import Navbar from '@/components/Navbar';
import React from 'react';
import Header from './_components/Header/Header';

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <main className='w-full flex-center'>{children}</main>
    </div>
  );
}

export default DashboardLayout;
