"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

const contactCard = ({name=str, icon, link=str}) => {
    
  return (
    <div>
      <Link href={link} target="_blank">
        <div className="inline-flex items-center justify-center gap-2 px-2 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 cursor-pointer border border-stone-950 hover:border-stone-400 duration-300 hover:shadow-2xl hover:shadow-white/20">
          <FontAwesomeIcon icon={icon} className='w-7 h-7' />
          <p className="font-semibold text-xl">{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default contactCard