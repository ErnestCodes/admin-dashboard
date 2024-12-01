'use client';

import { Button } from '@/components/ui/button';
import { useSupabase } from '@/contexts/SupabaseContext';
import { sendNotification } from '@/lib/notifications';
import { client } from '@/lib/supabaseClient';
import { Verification } from '@/types/enums';
import { ArrowRightLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  userData: Verification;
};

const Verifications = ({ userData }: Props) => {
  const { updateVerifications, updateUserRecord } = useSupabase();
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [isLoading, setIsLoaing] = useState<boolean>(false);
  const router = useRouter();

  const handleProfilePhoto = async () => {
    const { data, error } = await client
      .from('profiles')
      .select()
      .eq('user_id', userData?.user_id)
      .single();

    if (error) {
      console.error(error.message);
      setPhotoUrl('');
      return;
    }

    setPhotoUrl(data?.photoURL);

    const { data: user, error: userError } = await client
      .from('users')
      .select()
      .eq('id', userData?.user_id)
      .single();

    if (userError) {
      console.error(userError.message);
      setToken('');
      return;
    }

    setToken(user?.push_token);
  };

  useEffect(() => {
    if (userData?.user_id) {
      handleProfilePhoto();
    }
  }, [userData?.user_id]);

  const handleUpdate = async (status: 'PENDING' | 'ACCEPTED' | 'REJECTED') => {
    try {
      setIsLoaing(true);
      toast.success('Updating...');
      const updated = await updateVerifications?.(userData?.user_id, status);
      if (updated) {
        setIsLoaing(false);
        await sendNotification(
          'Profile verification was successful',
          token,
          'successful'
        );
        // update the user table
        await updateUserRecord?.(userData?.user_id);
        toast.success('Updated');
        router.back();
      } else {
        setIsLoaing(false);
        await sendNotification('Profile verification failed', token, 'failed');
        toast.error('An error occured, Try again');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between'>
        <Link href='/'>
          <div className='flex-start mt-10 flex items-center justify-center'>
            <span className='ml-2 text-md'>Verification</span>
            <ChevronRight size={20} className='mt-[2px]' />
            <span className='ml-2 text-gray-500 text-md'>
              {userData?.displayName}
            </span>
          </div>
        </Link>

        <div className='flex flex-row items-center gap-1 md:space-x-3'>
          <Button
            onClick={() => handleUpdate('REJECTED')}
            size={'lg'}
            variant='rejectedOutline'
            disabled={isLoading}
            className='text-sm'
          >
            Reject
          </Button>
          <Button
            disabled={isLoading}
            onClick={() => handleUpdate('ACCEPTED')}
            size={'lg'}
            variant='acceptedOutline'
            className='text-sm'
          >
            Accept
          </Button>
        </div>
      </div>
      {/* more */}
      <div className='mt-5 flex items-center justify-around px-20'>
        <div className='relative h-48 w-48 md:h-96 md:w-96'>
          {userData?.selfie_url && (
            <Image
              src={userData?.selfie_url}
              quality={100}
              alt='selfie'
              layout='fill' // required
              objectFit='cover' // change as you like
              className='rounded-full' // you can use other classes here too
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          )}
        </div>
        <ArrowRightLeft />
        <div className='relative h-48 w-48 md:h-96 md:w-96'>
          {photoUrl && (
            <Image
              src={photoUrl}
              quality={100}
              alt='selfie'
              layout='fill' // required
              objectFit='cover' // change as you like
              className='rounded-full' // you can use other classes here too
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Verifications;
