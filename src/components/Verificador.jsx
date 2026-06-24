import eyes from '../assets/eyeIcon.svg'

function Verificador() {
    return (
        <div className=" flex bg-white  shadow-sm rounded-lg  p-8 md:p-4  h-full">
            <div className='space-y-2 basis-xl m-auto '>
                <h2 className="font-bold font-sans text-sm md:text-xl text-[#6249F0] ">Verificador de senha</h2>
                <div className=' relative'>
                    <img src={eyes} alt="" className='w-5 absolute right-3 top-1 cursor-pointer' />
                    <input type="text" placeholder='Digite sua senha' className="border border-gray-400 outline-0 p-1.5 text-xs text-gray-500 rounded-sm focus:ring-[#6249F0]  focus:ring-1 w-full placeholder:text-xs" />
                </div>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className="w-[10%] h-2 rounded bg-green-600"></div>
                </div>
                <p className='text-xs text-gray-500 '>Força da senha</p>
            </div>
        </div>
    )
}

export default Verificador;