import eyes from '../assets/eyeIcon.svg'
import eyesSlash from '../assets/eyes-slash.svg'
import { useState } from 'react'

function Verificador({ aoDigitarSenha, barraDeForca }) {
    const [mostrar, setMostrar] = useState(false)
    const setView = () => {
        setMostrar(!mostrar)
    }

    return (
        <div className=" flex bg-white  shadow-sm rounded-lg  p-8 md:p-4  h-full">

            <div className='m-auto space-y-2 basis-2xl  md:basis-96 '>

                <h2 className="font-bold font-sans text-sm md:text-xl lg:text-2xl text-[#6249F0] ">Verificador de senha</h2>

                <div className=' relative w-full'>
                    <img src={mostrar ? eyes : eyesSlash} alt="" className='w-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' onClick={(e) => { setView() }} />

                    <input type={mostrar ? "text" : "password"} placeholder='Digite sua senha' className="border border-gray-400  outline-0 p-1.5 text-xs text-gray-500 rounded-sm focus:ring-[#6249F0]  focus:ring-1 w-full h-10 placeholder:text-xs " onChange={(e) => { aoDigitarSenha(e.target.value) }} />

                </div>

                <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className=" h-2 rounded bg-green-600 transition-all" style={{ width: `${barraDeForca}%` }}></div>

                </div>
                <div className='flex justify-between'>
                    <p className='text-xs text-gray-500 '>Força da senha</p>
                    <div className='text-xs text-gray-500 font-bold text-shadow-xs' style={{ color: `${barraDeForca <= 50 ? 'red' : barraDeForca <= 65 ? '#F9A900' : '#009C0A'}` }}>{barraDeForca <= 50 ? `Fraca` :
                        barraDeForca <= 65 ? `Média` :
                            barraDeForca <= 85 ? `Forte` :
                                `Excelente`}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Verificador;