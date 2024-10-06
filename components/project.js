import Image from "next/image"
import ModContent from "./modContent"




const Projects = ({ mods }) => {
  return (
    <div className='mb-12' id="projects">
      <h2 className='text-center text-3xl font-bold text-blue-500 hover:text-blue-600 duration-300 select-none'>Projelerim</h2>
      
      <div>
        {mods && mods.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 mt-6'>
            {mods.map((mod) => (
              <ModContent id={mod.id} modname={mod.title} resim={mod.icon} />
            ))}
          </div>
        ) : (
          <p>Mod bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;



