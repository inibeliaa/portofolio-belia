import React from 'react'
import Image from 'next/image'

function Card({foto,judul,children}:{foto:any,judul:string,children:any}) {
  return (
      <div className="bg-blue-50 float-start mx-2 border-4 border-slate-400 w-64 h-72 rounded-lg shadow-md shadow-slate-700 mt-10">
        <Image src={foto} width={280} height={140} className='border-b-4 border-slate-400' alt='sawako lagi'/>
        <h1 className='text-blue-950 underline px-3 pt-2 font-bold'>{judul}</h1>
        {children}
      </div>
  )
}

export default Card 