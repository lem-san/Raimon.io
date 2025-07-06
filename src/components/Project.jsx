import { useState, useEffect, useRef } from 'react'
import project from '../data/project'
import clsx from 'clsx'
import TruncateText from './TruncateText'
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Project({ id, className = '' }) {

    const numEntries = project.length
    const [isHovered, setIsHovered] = useState(false)
    const [visible, setVisible] = useState(Array(numEntries).fill(false))
    const entryRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              const index = Number(entry.target.dataset.index)
              if (entry.isIntersecting && !visible[index]) {
                setVisible(prev => {
                  const updated = [...prev]
                  updated[index] = true
                  return updated
                })
              }
            })
          },
          { threshold: 0.1 }
        )
    
        entryRefs.current.forEach(ref => {
          if (ref) observer.observe(ref)
        })
    
        return () => {
          entryRefs.current.forEach(ref => {
            if (ref) observer.unobserve(ref)
          })
        }
      }, [visible])

    const projectEntries = project.map((entry, index) => {
        const isVisible = visible[index]
        return (
            <div 
                key={entry.id} 
                data-index={index}
                ref={el => (entryRefs.current[index] = el)}
                className={clsx('relative backdrop-blur group duration-[500ms] z-10 my-4 flex p-6 rounded-xl ease-out overflow-hidden hover:bg-orange-500/20 hover:shadow-xl',
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                id={id}
            >
                <div className="w-[200px] h-[113px] flex-shrink-0 overflow-hidden rounded-lg border-4 border-zinc-900/10 hover:border-orange-300/90 duration-500 hover:brightness-80">
                <Zoom zoomMargin={100}>
                    <img 
                    src={entry.thumbnail} 
                    alt={entry.title}
                    className="w-full h-full object-cover cursor-pointer" 
                    />
                </Zoom>
                </div>
                <div className='pl-6 text-xs inline'>
                    <h3 className="text-lg font-family-source font-medium pb-3 tracking-tight flex items-center">{entry.title}
                        <IconContext.Provider value={{size:'1rem'}}>
                            <a href={entry.link} alt={entry.title} className='inline pl-2'><FaLink /></a>
                        </IconContext.Provider>
                    </h3>
                    <TruncateText text={entry.desc} charLimit={100} />
                    <ul className='pt-2'>
                        {entry.technicalSkills.map((skill, index) => (
                            <li key={index} className='list-none mt-[0.6em] mr-[0.6em] inline-block py-[0.5em] px-[1.5em] font-bold text-[0.9em] bg-rose-400/50 text-rose-800 rounded-full'>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    })

    return (
        <div id={id} className={clsx(className)}>
            <h2 className="font-family-playfair text-4xl pt-4">Projects.</h2>
            {projectEntries}
        </div>
    )
}