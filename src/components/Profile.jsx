import mapIcon from "../assets/mapIcon.svg"
import { PiGithubLogoLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IconContext } from "react-icons";
import { TypeAnimation } from 'react-type-animation';
import useActiveInfoSection from "./useActiveInfoSection";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";

export default function Profile({ className = '' }) {
    const sectionIds = ['employment', 'project', 'certification'];
    const activeSection = useActiveInfoSection(sectionIds);
    const { t, i18n } = useTranslation()

    return (
        <div className={`text-stone-950/80 dark:text-gray-400 max-w-[50%] ${className}`}>
            <h1 className="font-family-playfair dark:text-gray-100 py-[1rem] text-5xl">Raimon Barragans</h1>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    '\nEvent Coordinator',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    '\nALT English Teacher',
                    1000,
                    'EdTech Developer,\nESL English Instructor',
                    1000,
                ]}
                wrapper="h3"
                speed={60}
                style={{whiteSpace: 'pre-line'}}
                className="font-family-sourceRegular text-3xl py-[0.5rem] leading-10 tracking-tight h-full dark:text-gray-100 "
            />
            <h3 className="w-108 font-family-ibm font-light text-sm leading-7 py-2">
                {t('profileHello')} <br /> {t('profileBio')}
            </h3>
            <div className="flex pt-1">
                <a className="flex items-center" alt="Nagano, Japan" href="https://www.google.com/maps/place/Nagano/@36.1137301,137.3724047,9z/data=!3m1!4b1!4m6!3m5!1s0x601d012318c98c6b:0x25c2b4f04bf0b94!8m2!3d36.1543941!4d137.9218204!16zL20vMDE4amsy?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D">
                    <img className="w-[1em] pr-1" alt="Nagano Map Pin" src={mapIcon} />
                    <h3 className="font-family-ibm text-sm py-1 pl-1 font-bold">{t('profileLocation')}</h3>
                </a>
            </div>
            <div>
                <ul className="pt-6 pl-0 ml-0 flex list-none group-hover:scale-[1.01] gap-5">
                    <IconContext.Provider value={{size:'1.5rem'}}>
                    <li className="hover:scale-[1.3] transition-all hover:text-[#D4A373] dark:hover:text-emerald-400">
                        <a href="https://github.com/lem-san" alt="Github"><PiGithubLogoLight className="w-8"/></a>
                    </li>
                    <li className="hover:scale-[1.3] transition-all hover:text-[#D4A373] dark:hover:text-emerald-400">
                        <a href="https://www.linkedin.com/in/raimon-barragans/" alt="LinkedIn"><FaLinkedin className="w-8"/></a>
                    </li>
                    <li className="hover:scale-[1.3] transition-all hover:text-[#D4A373] dark:hover:text-emerald-400">
                        <a href="mailto:raimon.barragans@gmail.com" alt="Mail"><CiMail className="w-8"/></a>
                    </li>
                    </IconContext.Provider>
                </ul>
            </div>
            <SideBar active={activeSection}/>
        </div>
    )
}