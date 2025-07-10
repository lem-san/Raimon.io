export default function SideBar({ active }) {
  
  const sections = ['employment', 'project', 'certification']

  return (
    <>
    <div className="flex flex-col sticky pt-53 text-sm font-family-ibm max-w-[30%]">
        {sections.map((entry) => 
          <div className="flex items-center gap-3">
            <ul className="relative border-s border-gray-300">                  
                <li className="mb-10 ms-6 flex items-center justify-center">
                    {active === entry ? <span className="transition-all duration-200 absolute w-5 h-5 bg-orange-300 rounded-full -start-2.5 ring-6 ring-orange-50"><span className="flex h-full justify-center"><span className="w-3 h-3 bg-orange-50 rounded-full self-center"></span></span></span> : <span className="absolute -start-1.5 w-3 h-3 bg-stone-900/80 rounded-full ring-6 ring-orange-50"></span>}            
                    <h3 className=" leading-tight">
                      <a href={`#${entry}`} className={`transition-all duration-300 ${active === entry ? 'text-orange-300 font-bold uppercase' : 'text-stone-950/50 font-light'}`}>
                      {entry}</a>
                    </h3>
                </li>
            </ul>
          </div>
        )}
        <div className="fixed left-50 top-212.5 w-[30%] h-20 bg-orange-50"></div>
    </div>
    </>
  );
}
