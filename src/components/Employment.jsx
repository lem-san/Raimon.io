import { useEffect, useRef, useState } from 'react';
import employment from '../data/employment';
import './Employment.css';
import clsx from 'clsx'

export default function Employment() {
    const numEntries = employment.length;
    const [visible, setVisible] = useState(Array(numEntries).fill(false));
    const entryRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const index = Number(entry.target.dataset.index);
                    if (entry.isIntersecting && !visible[index]) {
                        setVisible(prev => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        entryRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            entryRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [visible]);

    // NOT WORKING
    
    // const hoverStyling = clsx(
    // "hover:bg-orange-200 duration-500 ease-out transform"
    // )

    return (
        <div>
            <h2 className="font-family-playfair text-4xl pt-4 pb-4">Employment.</h2>
            {employment.map((entry, index) => (
                <div
                    key={entry.id}
                    data-index={index}
                    ref={el => (entryRefs.current[index] = el)}
                    className={`flex py-2 p-2 transition-all duration-1600 ease-out transform ${
                        visible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    
                >
                    <p className="text-sm font-bold pr-35 pt-3.5 whitespace-nowrap min-w-[90px]">{entry.dates}</p>
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
            ))}
        </div>
    );
}
