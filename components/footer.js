import Image from "next/image"

const Footer = () => {
  return (
    <div className='mt-24 mb-4 flex flex-row justify-between items-top'>
        <div className='text-lg  font-semibold'>
          <p>© 2024 Tüm Haklar Saklıdır, <span className=' font-bold text-blue-500'>Xniop</span></p>
        </div>
        
        <div>
          <p className='text-right font-bold text-lg'>❤ Plover</p>
        </div>
    </div>
  )
}

export default Footer