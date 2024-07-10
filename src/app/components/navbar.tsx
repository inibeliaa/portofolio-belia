import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='bg-blue-200 text-blue-950 p-5 font-bold hover:bg-slate-400'>
      <div className='flex justify-between items-center'>
        <Image className='ms-16 float-start' src='/sawako.png' alt='Logo' width={20} height={20} />
        <div className='flex space-x-4 me-10'>
        <Link href='#main'>
          <p className='hover:text-amber-50'>Home</p>
        </Link>
        <Link href='#about'>
          <p className='hover:text-amber-50'>About</p>
        </Link>
        <Link href='#pals'>
          <p className='hover:text-amber-50'>Pals</p>
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
