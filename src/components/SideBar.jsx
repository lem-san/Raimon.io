export default function SideBar({ active }) {
  return (
    <div className="fixed flex flex-col space-y-4 sticky pt-20 text-sm">
      <div>
        <p>{active === 'employment' ? '> ' : '・ '}
        <a href="#employment" className={`transition-colors duration-300 ${active === 'employment' ? 'text-orange-500 font-bold' : 'text-gray-600'}`}>
          Employment
        </a></p>
      </div>
      <div>
        <p>{active === 'project' ? '> ' : '・ '}
        <a href="#project" className={`transition-colors duration-300 ${active === 'project' ? 'text-orange-500 font-bold' : 'text-gray-600'}`}>
          Projects
        </a></p>
      </div>
      <div>
        <p>{active === 'certification' ? '> ' : '・ '}
        <a href="#certification" className={`transition-colors duration-300 ${active === 'certification' ? 'text-orange-500 font-bold' : 'text-gray-600'}`}>
          Certifications
        </a></p>
      </div>
    </div>
  );
}
