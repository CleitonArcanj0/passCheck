import { useEffect } from "react"

function Requisitos({ forcaDaSenha, senhaDigitada }) {

    useEffect(() => {
        function contador() {
            let valor = 0
            senhaDigitada.match(/[0-9]/g) ? valor += 25 : valor.length > 0 ? valor -= 25 : valor += 0
            senhaDigitada.match(/[a-z]/g) ? valor += 15 : valor.length > 0 ? valor -= 15 : valor += 0
            senhaDigitada.match(/[A-Z]/g) ? valor += 15 : valor.length > 0 ? valor -= 15 : valor += 0
            senhaDigitada.match(/\W/g) ? valor += 30 : valor.length > 0 ? valor -= 30 : valor += 0
            senhaDigitada.length > 7 ? valor += 15 : valor.length > 0 ? valor -= 15 : valor += 0

            forcaDaSenha(valor)

        }

        contador()

    }, [senhaDigitada])

    return (
        <div className="flex flex-col bg-white shadow-sm rounded-lg  p-8 md:col-start-2">

            <div className="space-y-2 ">

                <h2 className="font-bold font-sans text-sm text-[#6249F0]">Requisitos</h2>

                <ul className="space-y-2 text-xs md:text-sm">

                    <li className="flex items-center gap-1.5 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#00A63E" className="size-4">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                        </svg>
                        Pelo menos 8 caracteres</li>

                    <li className="flex items-center gap-1.5 text-xs"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#00A63E" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg>Letra maiúscula</li>

                    <li className="flex items-center gap-1.5 text-xs"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#00A63E" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg>Letra minúscula</li>

                    <li className="flex items-center gap-1.5 text-xs"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#00A63E" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg>Caracter especial</li>

                    <li className="flex items-center gap-1.5 text-xs"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#00A63E" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
                    </svg>Não pode conter espaço</li>

                </ul>

            </div>

        </div>
    )
}

export default Requisitos;