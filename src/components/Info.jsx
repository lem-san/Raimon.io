import Employment from './Employment'
import Project from './Project'
import Certification from './Certification'
import { useTranslation } from "react-i18next";


export default function Information({className = ''}) {

    const { t, i18n } = useTranslation()

    return (
        <div className={`font-light font-family-ibx text-stone-950/80 scroll-smooth ${className}`}>
            <h2 className='font-family-playfair text-4xl pt-4 pb-8'>About Me.</h2>
            <p className="pb-5 leading-7 text-sm">{t('infoAbout')}</p>
            <Employment id="employment" className="scroll-mt-30"/>
            <Project id="project"  className="scroll-mt-30"/> 
            <Certification id="certification" className="scroll-mt-30"/>
            <p className='text-xs pt-15 leading-5'>
                Coded in <a href='https://code.visualstudio.com/' className='font-bold'>Visual Studio Code</a>. Built in <a href='https://vite.dev/' className='font-bold'>Vite</a> and <a href='https://tailwindcss.com/' className='font-bold'>Tailwind CSS</a>, deployed with <a href='https://www.netlify.com/' className='font-bold'>Netlify</a>.
                <br />
                Icons sourced from <a href='https://react-icons.github.io/react-icons/' className='font-bold'>React Icons</a> and 
                    <span className="font-bold custom-cursor transition-all duration-400 hover:text-orange-300/90"> Le Poisson Steve </span>
                illustrated by the talented <a href='https://www.instagram.com/vigzvigz/' className='font-bold'>Vigz</a>.
            </p>           
        </div>
    )
}