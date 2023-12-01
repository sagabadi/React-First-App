// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from "react-router-dom"

const Header = () => {
    // const [count, setCount] = useState(0)
    const navigate = useNavigate()
    return (
      <>
        <div className='header w-full inline-flex pl-8 pr-8 bg-white'>
          <div className="menu w-2/3 justify-around">
            <a href="" onClick={() => navigate('/')}>
              <div className='item p-2 w-28'>
                Home
              </div>
            </a>
            <a href="" onClick={() => navigate('/profil')}>
              <div className='item p-2 w-28'>
                Profil
              </div>
            </a>
            <a href="" onClick={() => navigate('/portofolio')}>
              <div className='item p-2 w-28'>
                Portofolio
              </div>
            </a>
            <a href="" onClick={() => navigate('/experience')}>
              <div className='item p-2 w-28'>
                Experience
              </div>
            </a>
          </div>
          <div className="menu_1 w-1/3">
            <div>
                <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">...</svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
            </div>
          </div>
          <div className='burger p-2 inline-block'>
            <div className="line_1 w-8"></div>
            <div className="line_2 w-8 mt-2"></div>
            <div className="line_3 w-8 mt-2"></div>
          </div>
        </div>
      </>
    )
  }
  
  export default Header