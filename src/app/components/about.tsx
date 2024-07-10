import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='mx-16 bg-slate-400 grid grid-cols-2 h-full rounded-lg p-9 justify-center drop-shadow-md shadow-slate-700 '>
          <div className='flex justify-center items-center'>
          <Image src='/sawako3.png' className='justify-center items-center' width={400} height={450} alt='sawako' />
          <hr />
          </div>
          <div className='mt-7 mb-16'>
            <p className='text-blue-950 font-bold'>About Me</p>
            <p className='text-2xl mt-2 font-bold text-blue-950'>Get To Know Me Here <i>!!!</i></p>
            <p className='text-base lowercase font-medium mt-2 text-amber-50'>Born with the name Belia Septi Ramadhani and people usually call me bey, bello, bebey but feel free to call me whatever you like.
            <span className='text-blue-950'>I blow candles on my cake every 20th of September</span>. Now im sixteen years old</p>
            <p className='text-base lowercase font-medium mt-2 text-amber-50'>things i like to do is reading man/hwas, listening to taylor swift, lana, panic! at the disco etc, eats a lot, doing ma makeup, watching movies like sopaholic, peterpan, mean girls, bridgerton, etc. </p>
          </div>
        </div>
  )
}

export default About