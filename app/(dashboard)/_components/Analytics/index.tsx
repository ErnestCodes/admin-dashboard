'use client';

import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { classData } from '../../(routes)/account/page';

const Analytics = () => {
  return (
    <ResponsiveContainer width={1500} height={400}>
      <AreaChart
        data={classData}
        margin={{ top: 35, right: 80, left: 40, bottom: 0 }}
        className='mx-auto'
      >
        <XAxis dataKey='month' fontSize={14} />
        <YAxis type='number' dataKey='bookings' />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />

        <Area
          type='monotone'
          dataKey='bookings'
          stroke='#8884d8'
          fill='#F8F9FE'
        />
        <Area
          type='monotone'
          dataKey='creator'
          stroke='#8884d8'
          fill='#F8F9FE'
        />
        <Area type='monotone' dataKey='price' stroke='#8884d8' fill='#F8F9FE' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Analytics;
