import { FileCode2 } from 'lucide-react';
import { CodeXml } from 'lucide-react';


function Hero({isDarkTheme}) {
  return (
    <div className="p-12 w-full flex justify-between">
      <div className="flex flex-col font-bold justify-center">
        <h1 className='text-6xl'>Meet your next dev</h1>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">Fullstack.</h1>
        <p className="font-bold text-xl text-gray-500 mt-2">Transformando ideias em código.</p>
        <button className="mt-4 py-3 bg-gradient-to-r from-[#FF0000] to-pink-900 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform origin-left hover:scale-x-105" style={{
          width: "50%"
        }}>
          Solicitar serviço
        </button>    
      </div>
      <div>
          <CodeXml className={isDarkTheme ? 'text-stone-900' : 'text-white'}  style={{
           position: 'absolute',
           top: '13%',
           right: '-5%',
           width: '35rem',
           height: '32rem',
           filter: 'drop-shadow(0 0 0.3rem rgba(255, 0, 0, 2))', // Simula uma borda
        }}/>
      </div>
    </div>
  );
}

export default Hero;

