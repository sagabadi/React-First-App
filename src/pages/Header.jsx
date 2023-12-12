// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'
// import ScriptTag from 'react-script-tag'

const Header = () => {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  function addToggle() {
    const hamburger = document.querySelector('#burger_menu_button')
    hamburger.classList.toggle('burger_menu_button-active')
  }
  return (
    <>
      <div className='header w-full inline-flex pl-8 pr-8 bg-white shadow-sm'>
        <div className="menu w-2/3 justify-around">
          <a href="" onClick={() => navigate('/')}>
            <div className={location.pathname == '/' ? "item p-2 w-28 active" : "item p-2 w-28"}>
              Home
            </div>
          </a>
          <a href="" onClick={() => navigate('/profil')}>
            <div className={location.pathname == '/profil' ? "item p-2 w-28 active" : "item p-2 w-28"}>
              Profil
            </div>
          </a>
          <a href="" onClick={() => navigate('/experience')}>
            <div className={location.pathname == '/experience' ? "item p-2 w-28 active" : "item p-2 w-28"}>
              Experience
            </div>
          </a>
          <a href="" onClick={() => navigate('/portofolio')}>
            <div className={location.pathname == '/portofolio' ? "item p-2 w-28 active" : "item p-2 w-28"}>
              Portofolio
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
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </label>
          </div>
        </div>
        <div className='burger_menu'>
          <button id="burger_menu_button" onClick={addToggle}>
            <div className="line_1 w-7 border border-black transition duration-200 ease-in-out origin-top-left"></div>
            <div className="line_2 w-7 mt-2 border border-black transition duration-200 ease-in-out"></div>
            <div className="line_3 w-7 mt-2 border border-black transition duration-200 ease-in-out origin-bottom-left"></div>

            <div className="full_outside">
              <a href="" onClick={() => navigate('/')}>
                <div className={location.pathname == '/' ? "item p-2 w-full active rounded-none" : "item p-2 w-full"}>
                  Home
                </div>
              </a>
              <a href="" onClick={() => navigate('/profil')}>
                <div className={location.pathname == '/profil' ? "item p-2 w-full active rounded-none" : "item p-2 w-full"}>
                  Profil
                </div>
              </a>
              <a href="" onClick={() => navigate('/experience')}>
                <div className={location.pathname == '/experience' ? "item p-2 w-full active rounded-none" : "item p-2 w-full"}>
                  Experience
                </div>
              </a>
              <a href="" onClick={() => navigate('/portofolio')}>
                <div className={location.pathname == '/portofolio' ? "item p-2 w-full active rounded-none" : "item p-2 w-full"}>
                  Portofolio
                </div>
              </a>
            </div>
            <div className="bg_full_">
            </div>
            <div className="bg_full">
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header