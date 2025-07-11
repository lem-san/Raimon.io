export default function SideBar({ active }) {
  
  const sections = ['employment', 'project', 'certification']

  return (
    <>
    <div className="flex flex-col sticky pt-53 text-sm font-family-ibm max-w-[30%]">
        {sections.map((entry) => 
          <div className="flex items-center gap-3">
            <ul className="relative border-s border-gray-300 dark:border-gray-400/60">                  
                <li className="mb-10 ms-6 flex items-center justify-center">
                    {active === entry ? <span className="transition-all duration-200 absolute w-5 h-5 bg-[#D4A373] dark:bg-emerald-400 rounded-full -start-2.5 ring-6 ring-amber-50 dark:ring-zinc-800"><span className="flex h-full justify-center"><span className="w-3 h-3 bg-amber-50 dark:bg-zinc-800 rounded-full self-center"></span></span></span> : <span className="absolute -start-1.5 w-3 h-3 bg-stone-900 dark:bg-gray-300 rounded-full ring-6 ring-amber-50 dark:ring-zinc-800"></span>}            
                    <h3 className=" leading-tight">
                      <a href={`#${entry}`} className={`transition-all duration-300 ${active === entry ? 'text-[#D4A373] dark:text-emerald-400 font-bold uppercase' : 'text-stone-950/80 dark:text-gray-400 font-light'}`}>
                      {entry}</a>
                    </h3>
                </li>
            </ul>
          </div>
        )}
        <div className="fixed left-78 top-212 w-5 h-10 bg-amber-50 duration-200 dark:bg-zinc-800 rounded-full"></div>
    </div>
    </>
  );
}
