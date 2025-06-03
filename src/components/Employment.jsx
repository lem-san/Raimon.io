import { useEffect, useRef, useState } from 'react'
import employment from '../data/employment'
import clsx from 'clsx'

export default function Employment() {
  const numEntries = employment.length
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
    <div>
      <h2 className="font-family-playfair text-4xl pt-4 pb-4">Employment.</h2>
      {employment.map((entry, index) => {
        const isVisible = visible[index]

        return (
          <div
            key={entry.id}
            data-index={index}
            ref={el => (entryRefs.current[index] = el)}
            onMouseMove={handleMouseMove}
            className={clsx(
              'relative rounded-xl bg-white/5 backdrop-blur group transition-all duration-[1600ms] ease-out overflow-hidden hover:bg-orange-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {/* Spotlight gradient layer */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 hover:bg-orange-700"
              style={{
                background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(224, 206, 160, 0.8), transparent 80%)`,
              }}
            />

            <div className="relative z-10 flex py-4 px-6 transition-transform duration-300 transform group-hover:scale-[1.01]">
              <p className="text-sm font-bold pr-8 pt-3.5 whitespace-nowrap min-w-[90px]">{entry.dates}</p>
              <div className="text-sm">
                <h3 className="text-lg font-bold py-2">
                  {entry.title}・<a className="underline" href={entry.link}>{entry.company}</a>
                </h3>
                <p className="leading-5 pb-2 tracking-tight">{entry.desc}</p>
                <div className="skillsSliderWrapper">
                  <ul className="skillsContainer">
                    {entry.softSkills.map((skill, i) => (
                      <li key={i} className="skills" id="softSkills">{skill}</li>
                    ))}
                  </ul>
                  <ul className="skillsContainer">
                    {entry.technicalSkills.map((skill, i) => (
                      <li key={i} className="skills" id="technicalSkills">{skill}</li>
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
