import mapIcon from "../assets/mapIcon.svg"
import { PiGithubLogoLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IconContext } from "react-icons";
import './Profile.css'

export default function Profile() {
    return (
        <div className="pl-100 pt-10 text-[#222] ">
            <h1 className="font-family-playfair text-5xl py-[1rem]">Raimon Barragans</h1>
            <h2 className="font-family-playfair text-2xl py-[1rem] italic">Edtech Developer,<br />Assistant Language Instructor</h2>
            <div className="flex pb-2">
                <h3 className="font-family-source text-xl py-1 font-bold pr-1">Nagano, Japan</h3>
                <a href="https://www.google.com/maps/place/Nagano/@36.1137301,137.3724047,9z/data=!3m1!4b1!4m6!3m5!1s0x601d012318c98c6b:0x25c2b4f04bf0b94!8m2!3d36.1543941!4d137.9218204!16zL20vMDE4amsy?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D">
                    <img className="w-[1em]" src={mapIcon} />
                </a>
            </div>
            <p className="w-125 font-family-source text-sm font-light">
                Hey, I'm Raimon. I'm an aspiring developer based in Japan. I build educational solutions that help my students engage and communicate in English.
            </p>
            <div>
                <ul className="pt-[15px] pl-0 mt-[5px] flex list-none">
                    <IconContext.Provider value={{color: '#222', size:'2rem'}}>
                    <li className="px-[10px]">
                        <a href="https://github.com/lem-san"><PiGithubLogoLight className="w-8"/></a>
                    </li>
                    <li className="px-[10px]">
                        <a href="https://www.linkedin.com/in/raimon-barragans/"><FaLinkedin className="w-8"/></a>
                    </li>
                    <li className="px-[10px]">
                        <a href="mailto:raimon.barragans@gmail.com"><CiMail className="w-8"/></a>
                    </li>
                    </IconContext.Provider>
                </ul>
            </div>
        </div>
    )
}