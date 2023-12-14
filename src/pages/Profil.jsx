// import { useState } from 'react'
// import Banyuwangi_1 from '../assets/banyuwangi_1.png'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./Header"

const Profil = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="content w-full justify-center">
        <div className='content-primary justify-between flex-col'>
          <div className="content_11 w-full">
            <div className='isi pt-16'>
              <h1 className='title text-6xl'>Hello Everyone!!</h1>
              <h1 className='text-2xl mt-5'>This is Bagas Adi Prayitno</h1>
            </div>
          </div>
          <div className="content_12 w-full pt-6">
            <div className='isi_1 pt-20 flex flex-col justify-center w-full'>
              <div className="line w-full flex justify-center">
                <div className="line-1 mb-20 shadow-2xl"></div>
              </div>
              {/* <div className='flex justify-center'>
                <img src={Banyuwangi_1} alt="" className='w-1/6'/>
              </div> */}
              <div className='flex justify-center pl-8 pr-8'>
                <h1>An ordinary guy from Banyuwangi city who have a dream to become an extraordinary guy. Obsessed on Information Technology, especially in software Development. Currently working at Secretary Ministry of Indonesia as a Fullstack Web Developer</h1>
              </div>
            </div>
            {/* <div className='isi_2 pt-20 w-1/2'>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profil
