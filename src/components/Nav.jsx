import { useState } from 'react'
import logo from '../assets/logo.svg'
import './Nav.css'

export default function Nav() {

    const [colorMode, setColorMode] = useState("light")
    const [isHovered, setIsHovered] = useState(false)

    function handleMode() {
        setColorMode(prevMode => prevMode === "light" ? "dark" : "light")
        document.body.classList.toggle("dark")
        document.querySelector('.navBar').classList.toggle('dark')
    }

    return (
        <header className='navBar'>
            <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ position:'relative', display:'inline-block' }}
            >
                <img className='logo' src={logo} alt='logo'/>
                {isHovered && (

                    // MOVE STYLING TO NAV.CSS
                    
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '45px',
                        background: 'white',
                        border: '1px solid black',
                        padding: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                        maxWidth: '600px',
                        textWrap: 'nowrap'
                    }}>
                        Hello 👋<br />I'm open for work opportunities!
                    </div> 
                )}
            </div>
            <div className='darkModeToggle'>
                <input type="checkbox" className="checkbox" id="checkbox" onChange={handleMode} />
                <label for="checkbox" className="checkbox-label">
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <span class="ball"></span>
                </label>
            </div>
        </header>           
)
}