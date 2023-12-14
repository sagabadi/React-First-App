// import { useState } from 'react'
import reactLogo from '../assets/photo_1.avif'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./Header"
import Footer from "./Footer"

const Home = () => {
    // const [count, setCount] = useState(0)
    return (
        <>
            <Header />
            <div className="content w-full justify-center">
                <div className='content-primary justify-around flex-row'>
                    <div className="content_1 flex flex-col pt-16">
                        <h1 className='title text-6xl'>EST. 1998</h1>
                        <h1 className='title text-md'>Banyuwangi</h1>
                        <h1 className='text-2xl mt-5'>Bagas Adi Prayitno</h1>
                    </div>
                    <div className="content_2 flex justify-center pt-16">
                        {/* ASU */}
                        <div className='isi flex justify-center'>
                            <img src={reactLogo} alt="" className='image w-5/6' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
