import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}
