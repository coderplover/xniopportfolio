import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='my-32 flex justify-center' id='about'>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-4 sm:gap-16 lg:gap-0'>
            <div>
                <Image
                src="/xniop.png"
                alt="Xniop"
                width={250}
                height={50}
                className='blur-[2px] duration-300 hover:blur-[0.2px]'
                />
            </div>
            <div className='w-96 sm:mr-0 lg:mr-24 text-gray-300'>
                <h2 className='text-3xl font-bold text-blue-500 hover:text-blue-600 duration-300 select-none sm:text-left text-center'>Hakkımda</h2>
                <p>Hello! I’m Xniop, creating mods for Farming Simulator using Blender for 3D modeling. I aim to enhance the gaming experience. I also have experience in web development and work to reach a broader audience with my projects. I strive to continuously improve myself.

</p>
                
            </div>
        </div>
    </div>
  )
}

export default About