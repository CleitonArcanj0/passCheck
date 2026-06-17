import NavBar from './components/NavBar'
import './App.css'
import Verificador from './components/Verificador'
import Requisitos from './components/Requisitos'
import { Fragment } from 'react/jsx-runtime'

function App() {

  return (
    <>
      <NavBar />

      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 items-center mx-10 mt-4 w-full' >
        <Verificador />
        <Requisitos />
      </div>
    </>

  )
}

export default App
