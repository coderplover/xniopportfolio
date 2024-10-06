'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
 
export default function Header() {
  const router = useRouter()
 
  return (
    <main>
      <div className="mt-12 flex w-full flex-col items-center justify-center">
      <Image
        src="/images/t6-3.png"
        alt="Traktör"
        width={890}
        height={50} className='rounded-2xl duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 hover:select-all cursor-pointer '
        onClick={() => router.push('/mods/1')}
      />
      
      </div>
    </main>
  )
}