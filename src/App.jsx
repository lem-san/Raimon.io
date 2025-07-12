import './index.css'
import Profile from './components/Profile'
import Info from './components/Info'
import { useState, useEffect, useRef } from 'react'
import logo from './assets/logo.png'
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import '../i18n';

import { useTranslation } from 'react-i18next';

  function Nav() {
    const [colorMode, setColorMode] = useState("light")
    const [isHovered, setIsHovered] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const { t, i18n } = useTranslation();
    const switchToEnglish = () => i18n.changeLanguage('en');
    const switchToJapanese = () => i18n.changeLanguage('ja');

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
        <header className={`z-50 bg-amber-50 dark:bg-zinc-800 transition-colors duration-200 ease-linear fixed w-full grid grid-cols-3 items-center border-b-2 border-[#D4A373] dark:border-zinc-700 px-10 py-5  
          ${isScrolled ? '' : 'border-hidden shadow-none dark:border-hidden'} 
        `}>
            <div className='relative justify-self-start'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
              {/* INDICATOR */}
              <span className="absolute top-1 right-0 -translate-y-1/2 translate-x-1/2 z-10 flex size-4  font-family-ibx">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#af7f4f] dark:bg-emerald-700 opacity-75"></span>
                <span className="relative inline-flex size-4 rounded-full bg-[#D4A373] dark:bg-emerald-400"></span>
              </span>

              {/* IMAGE */}
              <img
                className="w-12 transition-transform duration-100 ease-in hover:scale-150"
                src={logo}
                alt="logo"
              />

              {/* TOOLTIP */}
              {isHovered && (
                <div className="absolute left-[4.5rem] top-0 font-family-sourceRegular">
                  {/* CONTAINER */}
                  <div className="relative">
                    {/* Small 'update' box - overlaps the big one */}
                    <div className="absolute -top-3 left-8 border border-[#222] bg-[#fff] dark:bg-[#222] dark:text-[#fff] dark:border-[#fff] text-sm rounded-2xl px-3 py-1 z-10 font-family-sourceBold">
                      update
                    </div>

                    {/* Larger tooltip */}
                    <div className="bg-[#222] text-[#fff] dark:bg-[#fff] dark:text-[#222] dark:border-[#fff] p-[1rem] pt-6 rounded-3xl max-w-150 whitespace-nowrap mt-4">
                      Hello👋<br />
                      {t('bonusMessage')}
                    </div>
                  </div>
                </div>
                )}
            </div>
            <div className={`justify-self-center transition-all duration-300 ${
              isScrolled 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-y-1 pointer-events-none'
            }`}>
              <h1 className="font-family-playfair text-4xl text-stone-950/90 dark:text-[#fff]">Raimon.io</h1>
            </div>
            <div className='flex gap-2 justify-self-end'>
              <div className='bg-[#FAEDCD] dark:bg-zinc-700 p-2 font-family-ibm rounded-2xl'>
                <button className='bg-transparent px-3.5 py-3 text-xs hover:bg-[#D4A373] dark:hover:bg-zinc-100/10 dark:text-white rounded-xl transition-colors duration-200 ease-linear' onClick={switchToEnglish}>
                  EN
                </button>
                <button className='bg-transparent px-3.5 py-3 text-xs hover:bg-[#D4A373] dark:hover:bg-zinc-100/10 dark:text-white rounded-xl transition-colors duration-200 ease-linear' onClick={switchToJapanese}>
                  JA
                </button>
              </div>
              <div className='bg-[#FAEDCD] dark:bg-zinc-700 p-2 rounded-2xl'>
                <button className='bg-transparent p-3 hover:bg-[#D4A373] dark:hover:bg-zinc-100/10 dark:text-white rounded-xl transition-colors duration-200 ease-linear' onClick={() => handleMode("light")}>
                  <FiSun />
                </button>
                <button className='bg-transparent p-3 hover:bg-[#D4A373] dark:hover:bg-zinc-100/10 dark:text-white rounded-xl transition-colors duration-200 ease-linear' onClick={() => handleMode("dark")}>
                  <LuMoonStar />
                </button>
              </div>
            </div>
        </header>           
    )
}


function App() {
  return (
    <>
      <main className="bg-amber-50 dark:bg-zinc-800 transition-colors duration-200 ease-linear scroll-smooth">
        <Nav />
        <div className="pt-38 flex flex-row pb-10">
          <div className="w-[21%] flex flex-column">
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
