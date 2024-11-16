import React from 'react';
import StatsItem from './StatsItem';
import { ShieldAlert, ShieldCheck, Users, Wallet } from 'lucide-react';

const statData = [
  {
    id: 1,
    Icon: Users,
    label: 'Total Users',
    input: '1,500',
  },
  {
    id: 2,
    Icon: ShieldCheck,
    label: 'Completed Verifications',
    input: '500',
  },
  {
    id: 3,
    Icon: ShieldAlert,
    label: 'Pending Verifications',
    input: '2,500',
  },
  {
    id: 4,
    Icon: Wallet,
    label: 'GMV',
    input: '$150,000',
  },
];

const Stats = () => {
  return (
    <div className='flex-center flex-row gap-x-8 w-full mt-5'>
      {statData.map((stat) => (
        <StatsItem
          key={stat.id}
          label={stat.label}
          input={stat.input}
          Icon={stat.Icon}
        />
      ))}
    </div>
  );
};

export default Stats;
