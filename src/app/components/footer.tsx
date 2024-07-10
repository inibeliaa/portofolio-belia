import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-amber-50 pb-5'>
      <div className='grid grid-cols-3 ms-16'>
        <div className='col-span-2 pb-5'>
          <p className='text-blue-400 font-bold'>My Recent School Life</p>
          <p className='text-2xl text-blue-950 font-bold'>What Ive Been Up To in School </p>
          <p className='text-blue-400'>Being Ningrum in Historical Drama <span className='text-slate-500'>( Bandung Lautan Api )</span><br/> AKA a girl that being kidnapped by Inggris <br/>and then lastly being school comitte for graduate</p>        
        </div>
        <div className='relative bg-slate-400 me-16 rounded-tl-xl pb-5'>
          <div className='bg-blue-200 text-sm w-44 delay-75 h-44 rounded-md absolute top-16 right-64 text-blue-400 p-3'>
               <Image src="/pals7.jpg" className='drop-shadow-md' width={150} height={80} alt='drama'/> 
                <p className='mt-2 text-center'>19 June 2024</p>
            </div>
            <div className='bg-blue-200 text-sm w-44 h-44 rounded-md absolute top-16 right-14 text-blue-400 p-3'>
                <Image src="/pals8.jpg" className='drop-shadow-md h-28' width={150} height={100} alt='drama'/> 
                <p className='mt-2 text-center'>5 June 2024</p>
            </div>
        </div>
      </div>
      <div className='bg-slate-400 mx-16 text-sm pt-40 pb-5 rounded-b-lg'>
        <div className='flex justify-between text-center px-8'>
        <button className='text-3xl text-blue-950'>⬅</button>
        <div>
        <Image src='/sawako1.jpg' width={35} height={40} className='items-center ms-32 mb-3 rounded-full' alt='sawako'/>
        <p>The possibility of all those possibilities<br/> being possible is just that another possibility<br/> can possibly happen</p>
        <h1 className='font-bold mt-3'>Mark Lee</h1>
        <p className='text-blue-950'>✮<span className='text-blue-200'>✮</span>✮</p>
        </div>
        <button className='text-3xl text-blue-950'>➡</button>
        </div>
        <div className='flex justify-between px-8 py-14'>
        <h1 className='text-2xl font-semibold'>Interested Working<br/>With Me?</h1>
              <button className='bg-blue-300  border-2 border-blue-300 mt-3 rounded-sm '>
               <p className='m-2'>Email Me</p> 
              </button>
          </div>
          <hr className='mx-10'/>
          <p className='text-center mt-5'>© 2024 Belia</p>
      </div>
    </div>
  )
}

export default Footer