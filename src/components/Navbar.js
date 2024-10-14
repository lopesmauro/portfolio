
function Navbar({isPortuguese, isDarkTheme, setIsPortuguese, setIsDarkTheme}) {
  const toggleLanguage = () => {
    setIsPortuguese(!isPortuguese)
  }
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  return (
    <div className="text-3xl p-12 flex justify-between">
      <h1 className="font-extrabold bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">{"<Mauro />"}</h1>
      <ul className="flex items-center">
        <li className="mr-4">
          <button onClick={toggleLanguage} className={`flex items-center transition-colors duration-300 ${isPortuguese ? 'text-red-500' : 'text-gray-500'}`}>
            {isPortuguese ? 'br' : 'en'}
          </button>
        </li>
        <li>
          <button onClick={toggleTheme} className={`flex items-center transition-colors duration-300 ${isDarkTheme ? 'text-red-500' : 'text-gray-700'}`}>
            {isDarkTheme ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
