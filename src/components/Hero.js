function Hero({ isDarkTheme }) {
  return (
    <div className="p-12 w-full flex justify-between">
      <div className="flex flex-col font-bold justify-center">
        <h1 className='text-6xl'>Meet your next dev</h1>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#FF0000] to-pink-900 bg-clip-text text-transparent">Fullstack.</h1>
        <p className="font-bold text-xl text-gray-500 mt-2">Turning up ideas into code.</p>
        <button className="mt-4 py-3 bg-gradient-to-r from-[#FF0000] to-pink-900 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform origin-left hover:scale-x-105" style={{
          width: "50%"
        }}>
          Solicitar serviço
        </button>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-10%',
          width: '50rem',
          height: 'auto',
          fontSize: '28rem',
          fontWeight: 'bold',
          zIndex: '-1',
          WebkitTextStroke: '5px',
          WebkitTextStrokeColor: 'rgba(255, 0, 0, 0.6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 50%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 60%)',
        }}
      >
        {'</>'}
      </div>
    </div>
  );
}

export default Hero;
