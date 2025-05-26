import { useState } from 'react'
import logo from '../assets/logo.svg'
import './Nav.css'

export default function Nav() {

    const [colorMode, setColorMode] = useState("light")

    function handleHome() {
        return (
            alert('THIS WORKS')
        )
    }

    function handleMode() {
        setColorMode(prevMode => prevMode === "light" ? "dark" : "light")
        document.body.classList.toggle("dark")
    }

    return (
        <header className='navBar'>
            <img className='logo' src={logo} alt='logo' onClick={handleHome}/>
            <div className='darkModeToggle'>
                <input type="checkbox" class="checkbox" id="checkbox" onChange={handleMode} />
                <label for="checkbox" class="checkbox-label">
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <span class="ball"></span>
                </label>
            </div>
        </header>           
)
}