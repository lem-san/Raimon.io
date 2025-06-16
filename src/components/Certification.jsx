import certification from "../data/certification"
import { useState, useEffect, useRef } from "react"
import clsx from "clsx"

export default function Certification () {

    const numEntries = certification.length
    const [visible, setVisible] = useState(Array(numEntries).fill(false))
    const entryRefs = useRef([])
    const [isHovered, setIsHovered] = useState(null)

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

    const certificationEntries = certification.map((entry, index) => {
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
            >
                    <img 
                    src={entry.thumbnail} 
                    alt={entry.association}
                    className="w-30 h-full object-cover" 
                    />
                    <div className='pl-6 text-xs relative'>
                        <h3 className="text-lg font-family-source font-medium pb-3 tracking-tight ">{entry.accreditation}・<a className="font-bold" href={entry.link}>{entry.association}</a></h3>

                            <div className="flex items-center w-90 gap-3">
                                <div style={{ width: isHovered === index ? '100%' : '0%' }} className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div style={{ width: isHovered === index ? `${entry.progress}%` : '0%' }} className={clsx('h-2.5 rounded-full transition-all duration-600 ease-out',  
                                        entry.progress === 100 ? 'bg-emerald-400' : 'bg-amber-300'
                                        )}>
                                    </div>
                                </div>
                                <div className={ 
                                    isHovered === index ? clsx('rounded-md font-bold py-1 px-1.5 max-w-12 text-center', entry.progress === 100 ? 'bg-emerald-200 text-emerald-700' : 'bg-amber-200 text-amber-800'
                                    ) : "hidden"}>
                                    {entry.progress}%
                                </div>
                            </div>

                    </div>
            </div>
        )
    })

    return (
        <>
            <h2 className="font-family-playfair text-4xl pt-4">Certifications.</h2>
            {certificationEntries}
        </>
    )
}