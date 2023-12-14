// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
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
      <div className="header w-full flex pl-8 pr-8 bg-white shadow-sm place-items-center">
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
            <div className="bg_full">
            </div>
          </button>
          {/* <div className=""> */}
          <p className="avl awc awo axr text-xs mr-1">©2023 Designed By Bagas Adi Prayitno.</p>
          {/* <a href="https://www.instagram.com/bagasadiprayitno/"><img className='instagram-img w-6 h-6' src={instagram} alt="" /></a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDsRQNPTWwcHDljjZvjXdZDBfZLwtqnrNDftSQhJMqjxDdDskxRbtnmWWkMDSqVCFwlCpg"><img className='email-img w-6 h-6 ml-3' src={email} alt="" /></a>
          <a href="https://github.com/sagabadi"><img className='github-img w-6 h-6 ml-3' src={github} alt="" /></a> */}
          {/* </div> */}
        </div>
        <div className="flex w-full max-w-7xl justify-start">
          <div className="menu w-1/2 justify-between">
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
          <div className="menu w-1/2 justify-end place-items-center">
            <p className="avl awc awo axr text-xs mr-6">©2023 Designed By Bagas Adi Prayitno.</p>
            <a href="https://www.instagram.com/bagasadiprayitno/"><img className='instagram-img w-6 h-6' src={instagram} alt="" /></a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDsRQNPTWwcHDljjZvjXdZDBfZLwtqnrNDftSQhJMqjxDdDskxRbtnmWWkMDSqVCFwlCpg"><img className='email-img w-6 h-6 ml-3' src={email} alt="" /></a>
            <a href="https://github.com/sagabadi"><img className='github-img w-6 h-6 ml-3' src={github} alt="" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header