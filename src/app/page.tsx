import React from 'react';
import Navbar from './components/navbar';
import Image from 'next/image';
import Main from './components/main';
import About from './components/about';
import Card from './components/card';
import Footer from './components/footer';
export default function Home() {
  return (
    <main className='w-full min-h-screen bg-amber-50'>
      <Navbar />
        <Main />
        <About />
        <div className='mt-5 mx-16 font-bold flex justify-between w-full'>
          <div>
          <p className='text-lg text-blue-400'>Pals in</p>
          <p className='text-2xl text-blue-950'>HighSchool</p>
          </div>
          <div className='me-40'>
            <button className='text-blue-950 border-2 border-blue-950 rounded-s-md h-9 my-2 p-2'>⬅</button>
            <button className='bg-slate-400 rounded-e-md border-2 border-blue-950 h-9 my-2 p-2'>➡</button>
          </div>
        </div>
        <div id='pals' className='mx-3 ms-14 bg-amber-50 text-center flex pb-9'>
          <Card foto={'/pals1.jpg'} judul={'OSCAR'}>
          <p className='text-blue-400 mx-3'>Osis Smkn 1 Cisarua</p></Card>
          <Card foto={'/pals6.jpg'} judul={'10 PPLG 1'}>
          <p className='text-blue-400 mx-3'>Salwa, Syifa, Rindi, Laysa, Shany, Wulan, Amelia, Alya, Citra</p></Card>
          <Card foto={'/pals2.jpg'} judul={'11 PPLG 1'}>
          <p className='text-blue-400 mx-3'>Class Friends</p></Card>
          <Card foto={'/pals5.jpg'} judul={'Ciwi'}>
          <p className='text-blue-400 mx-3'>Salwa, Alya, Wulan, Shany, Belia, Syifa</p></Card>
        </div>
      <Footer />
    </main>
  );
}
