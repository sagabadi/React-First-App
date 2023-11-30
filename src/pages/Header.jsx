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