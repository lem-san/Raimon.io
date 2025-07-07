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
      <h2 className="font-family-playfair text-4xl pt-4">Employment.</h2>
      {employData.map((entry, index) => {
        const isVisible = visible[index]

        return (
          <div
            key={entry.id}
            data-index={index}
            ref={el => (entryRefs.current[index] = el)}
            onMouseMove={handleMouseMove}
            className={clsx(
              'relative my-4 rounded-xl backdrop-blur group duration-[500ms] ease-out overflow-hidden hover:shadow-xl',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
          >
            {/* Spotlight gradient layer */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
              style={{
                background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, white, transparent 80%)`,
              }}
            />

            <div className="relative z-10 flex p-6 transition-transform hover:bg-orange-500/20">
              <p className="text-sm font-family-source font-medium tracking-tight pt-1 whitespace-nowrap min-w-[10em]">{entry.dates}</p>
              <div className="text-xs">
                <h3 className="text-lg font-family-source font-medium pb-3 tracking-tight">
                  {entry.title}・<a className="font-bold" href={entry.link}>{entry.company}</a>
                </h3>
                <TruncateText text={entry.desc} charLimit={200} />
                <div className='pt-2'>
                  <ul>
                    {entry.softSkills.map((skill, i) => (
                      <li key={i} className='font-family-source list-none mt-[0.6em] mr-[0.6em] inline-block py-[0.5em] px-[1.5em] font-bold text-[0.9em] bg-emerald-300/50 text-emerald-700 rounded-full'>{skill}</li>
                    ))}
                  </ul>
                  <ul>
                    {entry.technicalSkills.map((skill, i) => (
                      <li key={i} className='font-family-source list-none mt-[0.6em] mr-[0.6em] inline-block py-[0.5em] px-[1.5em] font-bold text-[0.9em] bg-rose-400/50 text-rose-800 rounded-full'>{skill}</li>
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
