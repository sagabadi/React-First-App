// import { useState } from 'react'
import reactLogo from '../assets/photo_1.avif'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./Header"

const Home = () => {
  // const [count, setCount] = useState(0)
  return (
    <>
        <Header/>
        <div className="content w-full justify-center">
            <div className="content_1 inline-block justify-center pt-16">
                <h1 className='title text-6xl'>EST. 1998</h1>
                <h1 className='title text-md'>Banyuwangi</h1>
                <h1 className='text-2xl mt-5'>Bagas Adi Prayitno</h1>
            </div>
            <div className="content_2 flex justify-center pt-16">
                {/* <div className='isi pt-16'> */}
                    <img src={reactLogo} alt="" className='image w-5/6'/>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default Home
