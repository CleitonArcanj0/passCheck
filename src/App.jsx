import NavBar from './components/NavBar'
import './App.css'
import Verificador from './components/Verificador'
import Requisitos from './components/Requisitos'
import Sugestao from './components/Sugestao'
import { Fragment } from 'react/jsx-runtime'

function App() {

  return (
    <>
      <NavBar />

      <div className='grid grid-cols-1 md:grid-cols-[1.6fr_1fr]  items-start gap-4 md:gap-8 mx-24 mt-4'>
        <div className='row-span-2 h-full'>
          <Verificador />
        </div>

        <Requisitos />
        <Sugestao />
      </div>
    </>

  )
}

export default App
