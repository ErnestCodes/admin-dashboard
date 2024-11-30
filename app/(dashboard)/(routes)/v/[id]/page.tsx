'use client';

import React, { useEffect, useState } from 'react';
import Verifications from './_components/verifications';
import { client } from '@/lib/supabaseClient';
import { Verification } from '@/types/enums';

const VerificationPage = ({ params }: { params: { id: string } }) => {
  const [userData, setUserData] = useState<Verification | null>();

  const handleFetchById = async () => {
    const { data, error } = await client
      .from('verifications')
      .select()
      .eq('id', params.id)
      .single();

    if (error) {
      console.error(error.message);
      setUserData(null);
      return;
    }

    setUserData(data);
  };

  useEffect(() => {
    if (params.id) {
      handleFetchById();
    }
  }, [params?.id]);

  return (
    <div className='flex-col mt-5 flex w-full'>
      <Verifications userData={userData!} />
    </div>
  );
};

export default VerificationPage;
