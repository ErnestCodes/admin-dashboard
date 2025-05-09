import { cn } from '@/lib/utils';
import React from 'react';

import {
  BellIcon,
  FingerPrintIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Stats from '../../_components/Stats/Stats';

const AccountPage = () => {
  const secondaryNavigation = [
    { name: 'General', href: '#', icon: UserCircleIcon, current: true },
    { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  ];

  return (
    <div className='flex-col flex items-center'>
      <Stats />
      <div className='mx-auto max-w-7xl pt-4 lg:flex lg:gap-x-16 lg:px-8'>
        <h1 className='sr-only'>General Settings</h1>

        <aside className='flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20'>
          <nav className='flex-none px-4 sm:px-6 lg:px-0'>
            <ul
              role='list'
              className='flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col'
            >
              {secondaryNavigation.map((item: any) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      item.current
                        ? 'bg-gray-50 text-[#ff4d88]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#ff4d88]',
                      'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm/6 font-semibold'
                    )}
                  >
                    <item.icon
                      aria-hidden='true'
                      className={cn(
                        item.current
                          ? 'text-[#ff4d88]'
                          : 'text-gray-400 group-hover:text-[#ff4d88]',
                        'size-6 shrink-0'
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className='px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20'>
          <div className='mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none'>
            <div>
              <h2 className='text-base/7 font-semibold text-gray-900'>
                Profile
              </h2>
              <p className='mt-1 text-sm/6 text-gray-500'>
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <dl className='mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6'>
                <div className='pt-6 sm:flex'>
                  <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                    Full name
                  </dt>
                  <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                    <div className='text-gray-900'>Nnaemeka Onukwube</div>
                  </dd>
                </div>
                <div className='pt-6 sm:flex'>
                  <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                    Email address
                  </dt>
                  <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                    <div className='text-gray-900'>
                      emeksthecreator.dev@gmail.com
                    </div>
                  </dd>
                </div>
                <div className='pt-6 sm:flex'>
                  <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>
                    Title
                  </dt>
                  <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
                    <div className='text-gray-900'>
                      Chairman of the Board / Chief Engineer
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountPage;
