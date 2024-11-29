'use client';
import React from 'react';
import StatsItem from './StatsItem';
import { ShieldAlert, ShieldCheck, Users, Wallet } from 'lucide-react';
import useGetUsers from '@/hooks/useGetUsers';
import useGetVerifications from '@/hooks/useGetVerifications';

const Stats = () => {
  const { data: users } = useGetUsers();
  const { data: verifications } = useGetVerifications();

  const completed = verifications
    ? verifications.filter((user) => user.status === 'ACCEPTED').length
    : 0;
  const pending = verifications
    ? verifications.filter((user) => user.status === 'PENDING').length
    : 0;

  const statData = [
    {
      id: 1,
      Icon: Users,
      label: 'Total Users',
      input: users ? users?.length : 0,
    },
    {
      id: 2,
      Icon: ShieldCheck,
      label: 'Completed Verifications',
      input: completed,
    },
    {
      id: 3,
      Icon: ShieldAlert,
      label: 'Pending Verifications',
      input: pending,
    },
    {
      id: 4,
      Icon: Wallet,
      label: 'GMV',
      input: '$150,000',
    },
  ];
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
