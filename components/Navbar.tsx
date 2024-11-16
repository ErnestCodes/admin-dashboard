import Link from 'next/link';
import Image from 'next/image';
import { UserRound } from 'lucide-react';

const Navbar = async () => {
  return (
    <nav className='flex-between w-full mb-5 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/appIcon.png'
          alt='logo'
          width={40}
          height={40}
          className='object-cover rounded-full'
        />
        <p className='logo_text'>Swiperyt, Int.</p>
      </Link>

      <div className='flex'>
        <div className='h-8 w-8 flex-center bg-[#a3a3a3] rounded-full'>
          <UserRound color='#fff' size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
