import Flag from 'react-flagkit'
import { Sun, Moon } from 'lucide-react'


function Navbar({isPortuguese, isDarkTheme, setIsPortuguese, setIsDarkTheme}) {
  const toggleLanguage = () => {
    setIsPortuguese(!isPortuguese)
  }
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  return (
    <div className="text-4xl p-12 flex justify-between">
      <h1 className="font-extrabold bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">
        <span className="text-gray-500">{"<"}</span>
        <span>{"Mauro "}</span>
        <span className="text-gray-500">{"/>"}</span>
      </h1>
      <ul className="flex items-center">
        <li className="mr-4">
          <button onClick={toggleLanguage} className={`z-40 font-extrabold flex items-center ${isPortuguese ? 'text-red-500' : 'text-gray-500'}`}>
            {isPortuguese ? <Flag country="BR" /> : <Flag country="US"/>}
          </button>
        </li>
        <li>
          <button onClick={toggleTheme} className={`flex items-center ${isDarkTheme ? 'text-red-500' : 'text-gray-700'}`}>
            {isDarkTheme ? <Moon/> : <Sun/>}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
