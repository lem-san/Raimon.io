import mapIcon from "../assets/mapIcon.svg"
import { PiGithubLogoLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IconContext } from "react-icons";
import './Profile.css'

export default function Profile() {
    return (
        <div className="profile">
            <h1 className="name">Raimon Barragans</h1>
            <h2 className="title">Edtech Developer,<br />Assistant Language Instructor</h2>
            <h3 className="location">Nagano, Japan
                <a href="https://www.google.com/maps/place/Nagano/@36.1137301,137.3724047,9z/data=!3m1!4b1!4m6!3m5!1s0x601d012318c98c6b:0x25c2b4f04bf0b94!8m2!3d36.1543941!4d137.9218204!16zL20vMDE4amsy?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D">
                    <img className="mapIcon" src={mapIcon} />
                </a>
            </h3>
            <p className="bio">
                Hey, I'm Raimon. I'm an aspiring developer based in Japan. I build educational solutions that help my students engage and communicate in English.
            </p>
            <div className="socials">
                <ul>
                    <IconContext.Provider value={{color: '#222', size:'2rem'}}>
                    <li>
                        <a href="https://github.com/lem-san"><PiGithubLogoLight className="icon"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/raimon-barragans/"><FaLinkedin className="icon"/></a>
                    </li>
                    <li>
                        <a href="mailto:raimon.barragans@gmail.com"><CiMail className="icon"/></a>
                    </li>
                    </IconContext.Provider>
                </ul>
            </div>
        </div>
    )
}