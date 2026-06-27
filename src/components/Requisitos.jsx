import { useEffect } from "react"
import wrong from "../assets/wrong.svg"
import check from "../assets/check.svg"



function Requisitos({ forcaDaSenha, senhaDigitada }) {


    const lista = [
    {
        id: 1, 
        label: "Não pode conter espaços", 
        teste: (e) => e.match(/^\S+$/), 
        peso: 10
    },

    {
        id: 2, 
        label: "Letra maiúscula", 
        teste: (e) => e.match(/[A-Z]/g), 
        peso: 15
    },
    {
        id: 3, 
        label: "Letra minúscula", 
        teste: (e) => e.match(/[a-z]/g), 
        peso: 10
    },
    {
        id: 4, 
        label: "Pelo menos um número", 
        teste: (e) => e.match(/[0-9]/g), 
        peso: 15
    },
    {
        id: 5, 
        label: "Caractere especial", 
        teste: (e) => e.match(/[^A-Za-z0-9\s]/g),
        peso: 15
    },
    {
        id: 6, 
        label: "Comprimento ideal (12 ou mais caracteres)", 
        teste: (e) => e.length >= 12, 
        peso: 15
    },
    {
        id: 7, 
        label: "Evitar caracteres repetidos em sequência (ex: aaa, 111)", 
        teste: (e) => !e.match(/(.)\1{2,}/g), 
        peso: 10
    },
    {
        id: 8, 
        label: "Evitar sequências numéricas óbvias (ex: 123, 789)", 
        teste: (e) => !e.match(/(012|123|234|345|456|567|678|789|890|987|876|765|654|543|432|321|210)/g),
        peso: 5
    },
    {
        id: 9, 
        label: "Evitar sequências de teclado comuns (ex: qwe, asd)", 
        teste: (e) => !e.match(/(qwe|wer|ert|rty|tyu|yui|uio|iop|asd|sdf|dfg|fgh|ghj|hjk|jkl|zxc|xcv|cvb|vbn|bnm)/gi),
        peso: 5
    }
    ]
    useEffect(() => {
        const calcularForca = (senha) => {
            return lista.reduce((total, { teste, peso }) =>
                teste(senha) ? total + peso : total, 0)
        }

        let pontos = calcularForca(senhaDigitada)
        forcaDaSenha(pontos)

    }, [senhaDigitada])

    return (
        <div className="flex flex-col bg-white shadow-sm rounded-lg  p-8 md:col-start-2">

            <div className="space-y-2 ">

                <h2 className="font-bold font-sans text-sm text-[#6249F0]">Requisitos</h2>

                <ul className="space-y-2 text-xs md:text-sm">
                    {
                        lista.map((dados) => {
                            return <li
                                key={dados.id} className="flex gap-x-1 text-xs">
                                {dados.teste(senhaDigitada) ?
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