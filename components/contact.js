'use client'
 
import ContactCard from './contactCard';

import { faDiscord, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
 
export default function Page() {
  
 
  return (
    <div className='mt-32' id="contact">
        <h2 className='sm:text-left text-center text-3xl font-bold text-blue-500 hover:text-blue-600 duration-300 select-none'>İletişim</h2>
        
        
        <div className="mt-4 flex gap-4 sm:justify-normal justify-center ">
            <ContactCard name="İnstagram" icon={faInstagram} link="https://www.instagram.com/xniop_/"/>
            <ContactCard name="Youtube" icon={faYoutube} link="https://www.youtube.com/@xniop7253"/>
        </div>        
    </div>

    
    
  )
}


