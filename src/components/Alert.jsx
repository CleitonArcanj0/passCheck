import { useEffect, useState } from 'react';


export default function AlertaCustomizado({ bool = false }) {
    const [visivel, setVisivel] = useState(false);

   useEffect(()=>{
        setVisivel(bool)
   },[bool])

    return (
        <div className="p-5 font-sans">


            
            {visivel && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-1000 backdrop-blur-[1px]">

                    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-100 w-[90%] text-center animate-[scaleUp_0.2s_ease-out]">

                        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            ✓
                        </div>

                        <h3 className="m-0 mb-2 text-gray-900 text-lg font-semibold">
                            Operação Concluída
                        </h3>

                        <p className="m-0 mb-5 text-gray-500 text-sm leading-relaxed">
                            Seu texto foi copiado para a área de transferência.
                        </p>

                        <button
                            onClick={() => setVisivel(false)}
                            className="w-full padding py-2.5 bg-[#6249F0] hover:bg-[#5037d9] text-white rounded-md cursor-pointer font-bold transition-colors shadow-sm"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
