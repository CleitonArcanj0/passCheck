import NavBar from './components/NavBar'
import './App.css'
import Verificador from './components/Verificador'
import Requisitos from './components/Requisitos'
import Sugestao from './components/Sugestao'
import { Fragment } from 'react/jsx-runtime'
import { useState } from 'react';

function App() {
  const [senha, setSenha] = useState('')
  const [mostrar, setMostrar] = useState(false)
  const [forca, setForca] = useState(0)

  const inputSenha = (password) => {
    setSenha(password)
    console.log(password)
  }

  const controlarForca = (valor) => {
    setForca(valor)
   
  }

  return (
    <>
      <NavBar />

      <div className='grid grid-cols-1 md:grid-cols-[1.6fr_1fr]  items-start gap-4 md:gap-8 mx-8 md:mx-24 mt-4'>
        <div className='row-span-2 h-full'>
          <Verificador aoDigitarSenha={inputSenha} barraDeForca={forca} />
        </div>

        <Requisitos forcaDaSenha={controlarForca} senhaDigitada={senha} />
        <Sugestao />
      </div>
    </>

  )
}

export default App
