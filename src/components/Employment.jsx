import { useEffect, useRef, useState } from 'react'
import employment from '../data/employment'
import clsx from 'clsx'
import TruncateText from './TruncateText'
import { useTranslation } from "react-i18next"

export default function Employment( {id, className=''} ) {
  const numEntries = employment.length
  const [visible, setVisible] = useState(Array(numEntries).fill(false))
  const [isHovered, setIsHovered] = useState(null)
  const entryRefs = useRef([])
  const { i18n } = useTranslation()
  const employData = employment[i18n.language] || employment['en']

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

  // Spotlight mouse position
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: e.clientX - left,
      y: e.clientY - top,
    })
  }

  return (
    <div id={id} className={clsx(className)}>
      <h2 className="font-family-playfair text-4xl pt-4 dark:text-gray-100 ">Employment.</h2>
      {employData.map((entry, index) => {
        const isVisible = visible[index]

        return (
          <div
            key={entry.id}
            data-index={index}
            ref={el => (entryRefs.current[index] = el)}
            onMouseMove={handleMouseMove}
            className={clsx(
              'relative my-4 rounded-xl group duration-[500ms] ease-out overflow-hidden hover:bg-[#FAEDCD] hover:shadow-md dark:hover:bg-zinc-700/50',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
          >
            <div className="relative z-10 flex p-6 transition-transform">
              <p className="text-sm font-family-sourceRegular tracking-tight pt-1 dark:text-gray-100 whitespace-nowrap min-w-[10em]">{entry.dates}</p>
              <div className="text-xs">
                <h3 className="text-lg font-family-sourceRegular dark:text-gray-100 pb-3 tracking-tight">
                  {entry.title}・<a className="font-family-sourceBold " href={entry.link}>{entry.company}</a>
                </h3>
                <TruncateText text={entry.desc} charLimit={200} />
                <div className='pt-2'>
                  <ul>
                    {entry.softSkills.map((skill, i) => (
                      <li key={i} className='font-family-sourceBold list-none mt-[0.6em] mr-[0.6em] inline-block py-[0.5em] px-[1.5em] text-[0.9em] bg-emerald-300/40 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 dark:font-family-sourceRegular rounded-full'>{skill}</li>
                    ))}
                  </ul>
                  <ul>
                    {entry.technicalSkills.map((skill, i) => (
                      <li key={i} className='font-family-sourceBold list-none mt-[0.6em] mr-[0.6em] inline-block py-[0.5em] px-[1.5em] text-[0.9em] bg-rose-400/50 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 dark:font-family-sourceRegular rounded-full'>{skill}</li>
                    ))}
                  </ul>
                </div>  
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
