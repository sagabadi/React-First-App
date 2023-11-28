// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='header w-full inline-flex'>
        <div className="menu w-2/3 inline-flex justify-between pr-10 pl-10">
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
      </div>
    </>
  )
}

export default App
