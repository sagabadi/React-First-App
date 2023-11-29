// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='header w-full inline-flex pl-8 pr-8 bg-white'>
        <div className="menu w-2/3 justify-around">
          <a href="">
            <div className='item p-2 w-28'>
              Home
            </div>
          </a>
          <a href="">
            <div className='item p-2 w-28'>
              Profil
            </div>
          </a>
          <a href="">
            <div className='item p-2 w-28'>
              Portofolio
            </div>
          </a>
          <a href="">
            <div className='item p-2 w-28'>
              Experience
            </div>
          </a>
        </div>
        <div className='burger p-2 inline-block'>
          <div className="line_1 w-11"></div>
          <div className="line_2 w-11 mt-2"></div>
          <div className="line_3 w-11 mt-2"></div>
        </div>
      </div>
      <div className="content w-full justify-center">
        <div className="content_1 inline-block">
          <div className='isi pt-16'>
            <h1 className='title text-6xl'>EST. 1998</h1>
            <h1 className='text-2xl mt-5'>Bagas Adi Prayitno</h1>
          </div>
        </div>
        <div className="content_2 inline-block">
          <div className='isi pt-16'>
            <h1 className='title text-6xl'>EST. 1998</h1>
            <h1 className='text-2xl mt-5'>Bagas Adi Prayitno</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
