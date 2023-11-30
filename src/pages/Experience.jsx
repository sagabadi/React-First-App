// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./Header"

const Experience = () => {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <Header/>
        <div className="content w-full justify-center">
            <div className="content_1 inline-block justify-center">
                <div className='isi pt-16'>
                    <h1 className='title text-6xl'>EST. 1998</h1>
                    {/* <h1 className='title text-4xl mt-5'>Banyuwangi</h1> */}
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
  
  export default Experience
  