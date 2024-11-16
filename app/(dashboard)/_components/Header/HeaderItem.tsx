'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  Icon: LucideIcon;
  label: string;
  href: string;
};

const HeaderItem = ({ Icon, label, href }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <div className='flex-center flex-col'>
      <button onClick={onClick} className='flex-center flex-col gap-y-3'>
        <div
          className={cn(
            'h-12 w-12 flex-center rounded-full bg-white',
            isActive && 'bg-[#faaac4]'
          )}
        >
          <Icon
            size={20}
            className={cn('text-[#ff4d88]', isActive && 'text-white')}
          />
        </div>
        <span className='font-inter text-white font-normal text-lg'>
          {label}
        </span>
      </button>
      {isActive ? (
        <Image
          src='/assets/images/polygon.png'
          alt='angle'
          width={20}
          height={20}
          className='object-contain absolute top-[144.9px]'
        />
      ) : (
        <div className='absolute top-[144.9px]' />
      )}
    </div>
  );
};

export default HeaderItem;
