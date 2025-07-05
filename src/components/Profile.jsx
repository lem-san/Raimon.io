import mapIcon from "../assets/mapIcon.svg"
import { PiGithubLogoLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IconContext } from "react-icons";
import { TypeAnimation } from 'react-type-animation';
import useActiveInfoSection from "./useActiveInfoSection";
import SideBar from "./SideBar";

export default function Profile({ className = '' }) {
      const sectionIds = ['employment', 'project', 'certification'];
      const activeSection = useActiveInfoSection(sectionIds);
    return (
        <div className={`text-stone-950/80 ${className}`}>
            <h1 className="font-family-playfair text-5xl py-[1rem]">Raimon Barragans</h1>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Event Coordinator',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'ALT English Teacher',
                    1000,
                    'EdTech Developer,\nESL English Instructor',
                    1000,
                ]}
                wrapper="h3"
                speed={60}
                style={{whiteSpace: 'pre-line'}}
                className="font-family-source text-3xl py-[0.5rem] leading-10 tracking-tight"
            />
            <h3 className="w-105 font-family-ibx font-light text-sm leading-7 py-2">
                Hey, I'm Raimon.👋 <br /> I'm an aspiring developer based in Japan. I build educational tools that help my students engage and communicate in English.
            </h3>
            <div className="flex pt-1">
                <a className="flex items-center" href="https://www.google.com/maps/place/Nagano/@36.1137301,137.3724047,9z/data=!3m1!4b1!4m6!3m5!1s0x601d012318c98c6b:0x25c2b4f04bf0b94!8m2!3d36.1543941!4d137.9218204!16zL20vMDE4amsy?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D">
                    <img className="w-[1em] pr-1" src={mapIcon} />
                    <h3 className="font-family-ibx text-sm py-1 pl-1 font-bold">Nagano, Japan</h3>
                </a>
            </div>
            <div>
                <ul className="pt-[20px] pl-0 ml-0 flex list-none group-hover:scale-[1.01]">
                    <IconContext.Provider value={{size:'1.5rem'}}>
                    <li className="pr-[10px] hover:scale-[1.3] transition-all hover:text-orange-300/90">
                        <a href="https://github.com/lem-san"><PiGithubLogoLight className="w-8"/></a>
                    </li>
                    <li className="px-[10px] hover:scale-[1.3] transition-all hover:text-orange-300/90">
                        <a href="https://www.linkedin.com/in/raimon-barragans/"><FaLinkedin className="w-8"/></a>
                    </li>
                    <li className="px-[10px] hover:scale-[1.3] transition-all hover:text-orange-300/90">
                        <a href="mailto:raimon.barragans@gmail.com"><CiMail className="w-8"/></a>
                    </li>
                    </IconContext.Provider>
                </ul>
            </div>
            <SideBar active={activeSection}/>
        </div>
    )
}