import React from 'react'
import Image from "next/image"
import Link from 'next/link';

const ModContent = ({modname=str, resim=str, id=int}) => {
    
  return (
    <div>
      <Link href={`/mods/${id}`}>
        <div className="flex flex-col justify-between h-full border-stone-900 rounded-2xl duration-300 border bg-stone-950 hover:border-stone-400 hover:cursor-pointer hover:-translate-y-0.5 hover:blur-0 hover:shadow-lg hover:shadow-white/20">
            <div className="w- relative">
                <Image src={`/${resim}`} width="1920" height="1080" alt="ModResim" className="rounded-2xl"/>
                
            </div>
            <h2 className="text-center font-semibold py-2 text-lg select-none">{modname}</h2>
        </div>
      </Link>
    </div>
  )
}

export default ModContent