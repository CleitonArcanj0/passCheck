import { useEffect } from "react"
import wrong from "../assets/wrong.svg"
import check from "../assets/check.svg"




function Requisitos({ forcaDaSenha, senhaDigitada }) {

    useEffect(() => {
        function contador() {
            let valor = 0
            senhaDigitada.match(/[0-9]/g) && (valor += 25 )
            senhaDigitada.match(/[a-z]/g) &&( valor += 15 )
            senhaDigitada.match(/[A-Z]/g) &&( valor += 15 )
            senhaDigitada.match(/\W/g) &&( valor += 30 )
            senhaDigitada.length > 7 &&( valor += 15 )

            forcaDaSenha(valor)
        }

        contador()

    }, [senhaDigitada])

    const lista = [
        {
            id: 1, label: "Pelo menos 8 caracteres", e: (e) => e.length > 7
        },
        {
            id: 2, label: "Letra maiúscula", e: (e) => e.match(/[A-Z]/g)
        },
        {
            id: 3, label: "Letra minúscula", e: (e) => e.match(/[a-z]/g)
        },
        {
            id: 4, label: "Caracter especial", e: (e) => e.match(/\W/g)
        },
        {
            id: 5, label: "Não pode conter espaço", e: (e) => e.match(/^\S+$/)
        }
    ]

    return (
        <div className="flex flex-col bg-white shadow-sm rounded-lg  p-8 md:col-start-2">

            <div className="space-y-2 ">

                <h2 className="font-bold font-sans text-sm text-[#6249F0]">Requisitos</h2>

                <ul className="space-y-2 text-xs md:text-sm">
                    {
                        lista.map((dados) => {
                            return <li
                                key={dados.id} className="flex gap-x-1 text-xs">
                                {dados.e(senhaDigitada) ?
                                    <img src={check} alt="" className="h-4 w-4" /> :
                                    <img src={wrong} alt="" className="h-4 w-4" />}
                                {dados.label}
                            </li>
                        })}
                </ul>

            </div>

        </div>
    )
}

export default Requisitos;