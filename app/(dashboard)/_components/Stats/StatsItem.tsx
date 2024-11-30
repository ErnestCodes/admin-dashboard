import React from 'react';

import { LucideIcon } from 'lucide-react';

type Props = {
  label: string;
  input: any;
  Icon: LucideIcon;
};

const StatsItem = ({ label, input, Icon }: Props) => {
  return (
    <div
      className='p-4 flex-row items-center flex rounded-xl gap-x-3 w-[288px] h-[100px] bg-white'
      style={{
        boxShadow: '1px 2px 18px #E5E5E5',
      }}
    >
      <div className='h-10 w-10 rounded-full bg-[#ff4d88] flex-center'>
        <Icon size={20} color='#fff' />
      </div>
      <div className='flex-col flex-start'>
        <span className='text-xs font-inter text-[#000] font-normal'>
          {label}
        </span>
        <p className='text-2xl text-[#000] font-inter font-bold'>{input}</p>
      </div>
    </div>
  );
};

export default StatsItem;
