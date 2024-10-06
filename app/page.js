'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Header from '@/components/header'; 
import About from '@/components/about';
import Projects from '@/components/project';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import modsData from '@/data/modsData'; // Veri dosyasını içe aktar
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter()
  const [mods, setMods] = useState([]);
  // Verileri istemci tarafında yükleme
  useEffect(() => {
    const fetchMods = async () => {
      // Statik veriyi burada simüle ediyoruz, API'den veri de çekilebilir
      
      setMods(modsData);
    };
    fetchMods();
  }, []);
    
  return (
    <main>
      <Header/>
      <About/>
      <Projects mods={mods}/>
      <Contact/>
      <Footer/>
    </main>
  )
}


