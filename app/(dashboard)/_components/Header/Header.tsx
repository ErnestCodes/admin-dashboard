'use client';

import { Home, User } from 'lucide-react';
import React from 'react';
import HeaderItem from './HeaderItem';

const Routes = [
  {
    icon: Home,
    label: 'Home',
    href: '/',
  },
  {
    icon: User,
    label: 'Account',
    href: '/account',
  },
];

const Header = () => {
  return (
    <div className='w-full relative flex-center pt-8 shadow-sm  h-[157px] rounded-lg bg-[#ff4d88]'>
      <div className='flex-row  gap-x-28 max-w-3xl flex-center'>
        {Routes.map((route) => (
          <HeaderItem
            key={route.label}
            Icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
