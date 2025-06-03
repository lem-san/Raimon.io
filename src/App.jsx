import './index.css'
import Profile from './components/Profile'
import Info from './components/Info'
import { useState, useEffect, useRef } from 'react'
import logo from './assets/logo.svg'
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

  function Nav() {
    const [colorMode, setColorMode] = useState("light")
    const [isHovered, setIsHovered] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value to match your navbar height
      const navbarHeight = 200; // pixels
      const scrollPosition = window.scrollY;
      
      setIsScrolled(scrollPosition > navbarHeight);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleMode(newMode) {
      setColorMode(newMode)
      document.documentElement.classList.toggle("dark", newMode === "dark")
    }

    return (
        <header className={`z-50 bg-orange-50 dark:bg-zinc-800 transition-colors duration-200 ease-linear fixed w-full flex justify-between items-center border-b border-orange-200 px-[30px] py-[20px] 
          ${isScrolled ? '' : 'border-transparent shadow-none '} 
        `}>
            <div className='relative inline-block'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img className="w-[50px] transition-transform duration-100 ease-in hover:scale-150" src={logo} alt='logo'/>
                {isHovered && (                    
                    <div className="absolute top-[1em] left-[4.5rem] bg-white border border-black p-[1rem] rounded-[1rem] max-w-[20rem] whitespace-nowrap">
                        Hello 👋<br />I'm open for work opportunities!
                    </div> 
                )}
            </div>
              <div className={`transition-all duration-300 ${
                isScrolled 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-y-1 pointer-events-none'
              }`}>
                <h1 className="font-family-playfair text-4xl">Raimon.io</h1>
              </div>
            <div className='bg-orange-100 dark:bg-zinc-700 p-2 rounded-2xl'>
              <button className='bg-transparent p-3 hover:bg-orange-200 dark:hover:bg-zinc-100/10 dark:text-white rounded-xl transition-colors duration-200 ease-linear' onClick={() => handleMode("light")}>
                <FiSun />
              </button>
              <button className='bg-transparent p-3 hover:bg-orange-200 dark:hover:bg-zinc-100/10 dark:text-white rounded-xl transition-colors duration-200 ease-linear' onClick={() => handleMode("dark")}>
                <LuMoonStar />
              </button>
            </div>
        </header>           
    )
}

function App() {
  return (
    <>
      <main className="bg-orange-50 dark:bg-zinc-800 transition-colors duration-200 ease-linear scroll-smooth">
        <Nav />
        <div className="pt-[150px] flex flex-row">
          <div className="w-[21%]">
            <Profile className="w-[80%] fixed pl-[18%]" />
          </div>
          <div className="w-[50%] ml-[28%]">
            <Info className='pr-[25%]'/>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
