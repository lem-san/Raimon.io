import { useState } from 'react'
import project from '../data/project'

export default function Project(){

    const [isHovered, setIsHovered] = useState(false)

    const projectEntries = project.map((entry, index) => {
        return (
            <div key={entry.id} className='relative z-10 flex p-6 rounded-xl transition-transform duration-300 transform group-hover:scale-[1.01] hover:bg-orange-500/20 hover:border-t-2 hover:border-orange-200/40 ease-out overflow-hidden hover:shadow-xl'  
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
            >
                <img src={entry.thumbnail} alt={entry.title} className='w-50 border-zinc-900/10 border-4 rounded-lg h-[100%]'/>
                <div className='pl-6'>
                    <a href={entry.link} alt={entry.title}><h3 className='font-bold text-lg'>{entry.title}</h3></a>
                    <p className='leading-5 pb-2 tracking-tight'>{entry.desc}</p>
                    <div className="skillsSliderWrapper">
                        {isHovered === index && (
                            <ul className="skillsContainer">
                                {entry.technicalSkills.map((skill, index) => (
                                    <li key={index} className='list-none mt-[0.6em] mr-[0.6em] inline-block py-[0.5em] px-[1.5em] font-bold text-[0.9em] bg-rose-400/50 text-rose-800 rounded-full'>{skill}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2 className="font-family-playfair text-4xl pt-4 pb-6">Projects.</h2>
            {projectEntries}
        </div>
    )
}