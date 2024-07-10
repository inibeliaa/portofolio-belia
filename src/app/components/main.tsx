import React from 'react'
import Image from 'next/image'

function Main() {
  return (
    <div id='main' className='grid grid-cols-4 text-blue-950 font-bold'>
          <div className='relative'>
            <div className='absolute top-44 left-20'>
              <p className='text-xl text-blue-400'>Hi, I am</p>
              <p className='text-6xl hover:text-8xl hover:text-blue-400'>Belia</p>
              <p className='text-6xl hover:text-blue-400'>Ramadhani<span className='text-blue-500 text-7xl'>.</span></p>
              <div className='bg-blue-400 w-10 h-2 mt-4'></div>

            </div>
          </div>
          <div className='flex ms-10 mt-4 col-span-2 justify-center items-center'>
            <Image src='/sawako2.png' width={550} height={450} alt='sawako' />
          </div>
          <div className='relative col-span-1 me-3'>
            <div className='absolute top-28 right-20'>
              <p className='text-3xl'>Prakerin Kerja Lapangan</p>
              <p className='font-normal mt-4 leading-1'>Im currently a third-year student and majoring in software and game development located in SMK Negeri 1 Cisarua, and now im in PT Saptaloka Digital continur my study in 6 month </p>
              <a href='https://wa.me/qr/R77PIEWW6MZMD1'>
                <button className='bg-blue-300 mt-3 p-3 rounded-sm animate-bounce shadow-md'>
                  Email Me
                </button>
              </a>
            </div>
          </div>
        </div>
  )
}

export default Main