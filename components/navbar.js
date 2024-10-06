'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex w-full justify-center'>
      <div className='flex flex-row sm:flex-row w-full lg:gap-36 justify-between items-center text-center my-5 '>
        
        {/* Sol Navigasyon Butonları */}
        <div className='hidden sm:flex flex-row gap-5'>
          <button onClick={() => router.push('/')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>AnaSayfa</button>
          <button onClick={() => router.push('/#about')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>Hakkımızda</button>
        </div>

    

        {/* Logo veya Başlık */}
        <h1 onClick={() => router.push('/')} className='text-4xl sm:text-3xl lg:text-4xl font-bold text-blue-500 hover:text-blue-600 duration-300 select-none cursor-pointer mx-auto'>Xniop</h1>

        

        {/* Sağ Navigasyon Butonları */}
        <div className='hidden sm:flex flex-row gap-5'>
          <button type="button" onClick={() => router.push('/#projects')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>Projelerim</button>
          <button onClick={() => router.push('/#contact')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>İletişim</button>
        </div>
        
        {/* Açık Menü Durumunda Navigasyon Butonları (Küçük Ekranlar için) */}
        <div className={`sm:hidden flex-col ${isMenuOpen ? 'flex' : 'hidden'} w-full justify-between items-center text-center my-5`}>
          <button onClick={() => router.push('/')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>AnaSayfa</button>
          <button onClick={() => router.push('/#about')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>Hakkımızda</button>
          <button type="button" onClick={() => router.push('/#projects')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>Projelerim</button>
          <button onClick={() => router.push('/#contact')} className='text-md text-gray-300 hover:text-white hover:drop-shadow-2xl duration-300'>İletişim</button>
        </div>
      </div>
    </div>
  );
}
