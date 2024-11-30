'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, FileImage, Info, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Verification } from '@/types/enums';
import { formatDate } from '@/lib/utils';

export const columns: ColumnDef<Verification>[] = [
  {
    accessorKey: 'displayName',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue('displayName') || ('' as any);
      return <span className='ml-4'>{name}</span>;
    },
  },
  {
    accessorKey: 'selfie_url',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Selfie image
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='ml-4 flex-row flex items-center space-x-2'>
          <FileImage />
          <span>Selfie Image</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'id_url',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID image
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='ml-4 flex-row flex items-center space-x-2'>
          <FileImage />
          <span>Identity Image</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue('created_at') || ('' as any);
      const formatedDate = formatDate(date);
      return <span className='ml-4'>{formatedDate}</span>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },

    cell: ({ row }) => {
      const status = row.getValue('status') || ('' as any);
      const isPending = status === 'PENDING';
      const isAccepted = status === 'ACCEPTED';
      const isRejected = status === 'REJECTED';

      return (
        <>
          {isPending && (
            <Button variant={'pending'} className='ml-4'>
              {status}
            </Button>
          )}

          {isRejected && (
            <Button variant={'destructive'} className='ml-4'>
              {status}
            </Button>
          )}

          {isAccepted && (
            <Button variant={'completed'} className='ml-4'>
              {status}
            </Button>
          )}
        </>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-4 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreVertical className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <Link href={`/v/${id}`}>
              <DropdownMenuItem>
                <Info className='h-4 w-4 mr-2' />
                View more
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
