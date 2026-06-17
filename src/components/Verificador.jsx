import eyes from '../assets/eyeIcon.svg'

function Verificador() {
    return (
        <div className="flex flex-col  bg-white space-y-2 shadow-sm rounded-lg max-w-94 p-4">
            <h2 className="font-bold font-sans text-xs text-[#6249F0]  md:text-xs">Verificador de senha</h2>
            <div className=' relative'>
                <img src={eyes} alt="" className='w-5 absolute right-3 top-1 cursor-pointer' />

                <input type="text" className="border border-gray-400 outline-0 p-1.5 text-xs text-gray-500 rounded-sm focus:ring-[#6249F0]  focus:ring-1 w-full" />
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="w-[10%] h-2 rounded bg-green-600"></div>
            </div>
            <p className='text-xs text-gray-500 '>Força da senha</p>
        </div>
    )
}

export default Verificador;