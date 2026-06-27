import NavBar from './components/NavBar'
import './App.css'
import Verificador from './components/Verificador'
import Requisitos from './components/Requisitos'
import Sugestao from './components/Sugestao'
import Footer from './components/Footer'
import Alert from './components/Alert'
import { Fragment } from 'react/jsx-runtime'
import { useState } from 'react';

function App() {
  const [senha, setSenha] = useState('')
  const [forca, setForca] = useState(0)
  const [viewAlert, setViewAlert] = useState(false)


  const inputSenha = (password) => {
    setSenha(password)
  }

  const controlarForca = (valor) => {
    setForca(valor)

  }
  const copiarSenha = async () => {
    await navigator.clipboard.writeText(senha)

    setViewAlert(true)

    setTimeout(() => {
      setViewAlert(false)
    }, 2000)

  }

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        
        <NavBar />


        <div className='grid grid-cols-1  md:grid-cols-[1.6fr_1fr]  items-start gap-4 md:gap-8 mx-2 md:mx-12 lg:mx-20 mt-4 mb-8'>

          <div className='row-span-2 h-full'>
            <Verificador aoDigitarSenha={inputSenha} botaoCopiar={copiarSenha} barraDeForca={forca} />
          </div>

          <Requisitos forcaDaSenha={controlarForca} senhaDigitada={senha} />

          <Sugestao />

        </div>
        <Alert bool={viewAlert} /> 

        <div className='mt-auto'>

          <Footer />

        </div>

      </div>

    </>

  )
}

export default App
