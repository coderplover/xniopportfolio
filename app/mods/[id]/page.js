'use client';
import modsData from '@/data/modsData'; // Veri dosyasını içe aktar
import Image from "next/image"
import Link from 'next/link';
import Footer from '@/components/footer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
   
export default function ModPage({ params }) {
  const router = useRouter()
  const { id } = params; // URL parametresini al

  // Veriyi bulma
  const mod = modsData.find(mod => mod.id === id);

  if (!mod) {
    return <h1>Mod bulunamadı</h1>; // Mod bulunamazsa mesaj göster
  }
  const images = mod.image; // Resim dizisini al
  const [currentIndex, setCurrentIndex] = useState(0);
// Slider güncelleme fonksiyonu
const updateSlider = (index) => {
  if (index < 0) {
    setCurrentIndex(images.length - 1); // Son slayta git
  } else if (index >= images.length) {
    setCurrentIndex(0); // İlk slayta git
  } else {
    setCurrentIndex(index); // Belirtilen index'e git
  }
};


  return (
    <div>
      <Link href={'/'} className="flex items-center gap-1">
      <FontAwesomeIcon icon={faArrowLeft} className="text-md text-blue-600" />
      <p className="text-blue-600 text-sm ">Geri Dön</p>
      </Link>
      <div>
      <div className="flex justify-between items-center my-4 ">
        <div className="w-[50%] ">
        <h1 className='text-3xl mt-3 font-bold'>{mod.title}</h1>
        <p className="text-gray-300 text-sm whitespace-pre-line">{mod.desc}</p>
        {/* 'link' değişkeni var mı kontrol edin */}
    {mod.design ? (
      <p className="mt-2"><span className="text-blue-500 font-semibold text-md">Çizim</span> Berkay Kuzan</p>
    ) : null}  {/* Eğer link yoksa buton gözükmez */}
        
        {/* 'link' değişkeni var mı kontrol edin */}
    {mod.link ? (
      <button 
        className="px-8 py-1 mt-4 bg-blue-500 rounded-xl font-semibold text-lg duration-300 border border-blue-500 hover:bg-stone-900 hover:border-blue-500 hover:text-blue-500 hover:shadow-2xl hover:shadow-white/20"
        onClick={() => window.open(mod.link, '_blank')}
      >
        İndir
      </button>
    ) : null}  {/* Eğer link yoksa buton gözükmez */}

    {/* 'link' değişkeni var mı kontrol edin */}
    {mod.youtube ? (
      <button 
        className="px-8 py-1 mt-4 bg-[#FF0000] rounded-xl font-semibold text-md duration-300 border border-[#FF0000]  hover:bg-stone-900 hover:border-[#FF0000] hover:text-[#FF0000] hover:shadow-2xl hover:shadow-white/20"
        onClick={() => window.open(mod.youtube, '_blank')}
      >
        Youtube'da izle
      </button>
    ) : null}  {/* Eğer link yoksa buton gözükmez */}
        
        </div>
        <div className="w-64 relative border border-stone-900 duration-300 bg-stone-900  rounded-2xl hover:border-stone-400 hover:cursor-pointer hover:shadow-2xl hover:shadow-white/20">
              <Image src={`/${mod.icon}`} width="1920" height="1080" alt="ModResim" className="rounded-2xl"/>
        </div>
      </div>

      {/* Slider Kısmı */}
      <div className="relative w-full  overflow-hidden rounded-2xl duration-300 hover:shadow-2xl hover:shadow-white/20">
        <div className="flex transition-transform duration-300 ease-in-out " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="min-w-full">
              <Image src={img} alt={`${mod.title} Image ${index + 1}`} className="object-cover w-full " width={890} height={95} quality={100}/>
            </div>
          ))}
        </div>
        <button onClick={() => updateSlider(currentIndex - 1)} className="absolute top-1/2 left-0 transform -translate-y-1/2 mx-2 p-2 rounded-full  flex items-center justify-center">
  <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" /> {/* Sol ok */}
</button>
<button onClick={() => updateSlider(currentIndex + 1)} className="absolute top-1/2 right-0 transform -translate-y-1/2 mx-2 p-2 rounded-full  flex items-center justify-center">
  <FontAwesomeIcon icon={faChevronRight} className="text-2xl" /> {/* Sağ ok */}
</button>
      </div>
      </div>

      <Footer/>
    </div>
  );
}
