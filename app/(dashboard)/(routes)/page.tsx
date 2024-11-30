'use client';

import React from 'react';
import Stats from '../_components/Stats/Stats';
import useGetVerifications from '@/hooks/useGetVerifications';
import DataTable from '../_components/data-table';
import { columns } from '../_components/columns';

const HomePage = () => {
  const { data, isLoading } = useGetVerifications();

  return (
    <div className='flex flex-col w-full'>
      <Stats />

      {data && <DataTable columns={columns} data={data} />}
    </div>
  );
};

export default HomePage;
