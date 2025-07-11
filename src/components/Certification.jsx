import certification from "../data/certification"
import { useState, useEffect, useRef } from "react"
import clsx from "clsx"
import TruncateText from "./TruncateText"
import { useTranslation } from "react-i18next"

export default function Certification ( {id, className=''} ) {

    const numEntries = certification.length
    const [visible, setVisible] = useState(Array(numEntries).fill(false))
    const entryRefs = useRef([])
    const [isHovered, setIsHovered] = useState(null)
    const { i18n } = useTranslation()
    const certData = certification[i18n.language] || certification['en']

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

    const certificationEntries = certData.map((entry, index) => {
        const isVisible = visible[index]
        return (
            <div
                key={entry.id} 
                data-index={index}
                ref={el => (entryRefs.current[index] = el)}
                className={clsx('relative min-h-45 group duration-[500ms] z-10 my-4 flex items-center p-6 rounded-xl ease-out overflow-hidden hover:bg-[#FAEDCD] hover:shadow-md dark:hover:bg-zinc-700/50',
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                id={id}
            >
                    <img 
                    src={entry.thumbnail} 
                    alt={entry.association}
                    className="w-30 h-full object-cover rounded-lg border-4 border-zinc-900/10" 
                    />
                    <div className='pl-6 text-xs relative transition-transform font-family-ibm'>
                        <h3 className="text-lg font-family-sourceRegular tracking-tight dark:text-gray-100">{entry.accreditation}</h3>
                        <h3 className="text-base font-family-sourceBold tracking-tight pb-2 dark:text-gray-100/80"><a href={entry.link}>{entry.association}</a></h3>
                        <TruncateText text={entry.desc} charLimit={70} />
                        <div className="flex pt-3 items-center gap-3">

                        {/* Progress Bar Background */}
                            <div className="bg-gray-200 rounded-full h-2.5 w-60 dark:bg-gray-700">
                                {/* Animated Bar */}
                                <div
                                style={{ width: isHovered === index ? `${entry.progress}%` : '0%' }}
                                className={clsx(
                                    'h-2.5 rounded-full transition-all duration-700 ease-out',
                                    entry.progress === 100 ? 'bg-emerald-400' : 'bg-amber-300'
                                )}
                                />
                            </div>

                        {/* Progress Percentage — stays in place, just fades */}
                            <div
                                className={clsx(
                                'min-w-10 tracking-wide text-center text-xs font-family-ibm font-bold rounded-md py-1 px-1.5 transition-opacity duration-300',
                                entry.progress === 100
                                    ? 'bg-emerald-200 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 '
                                    : 'bg-amber-200 text-amber-800 dark:bg-amber-800/40 dark:text-amber-300 ',
                                isHovered === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                                )}
                            >
                                {entry.progress === 100 ? entry.progress + "% " + " (" + entry.compDate + ")" : entry.progress + "%"}
                            </div>
                        </div>
                    </div>
            </div>
        )
    })

    return (
        <>
        <div id={id} className={clsx(className)}>
            <h2 className="font-family-playfair text-4xl pt-4 dark:text-gray-100">Certifications.</h2>
            {certificationEntries}
        </div>
        </>
    )
}