// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./Header"
import Footer from "./Footer"

const Experience = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="content w-full justify-center">
        <div className='content-primary justify-between flex-col'>
          <div className="content_11 w-full">
            <div className='isi pt-16'>
              <h1 className='title text-6xl'>Work Experience</h1>
            </div>
            <div className='work-grid justify-items-center mb-14'>
              <div className="box flex-col pl-6 pr-6 pt-6 pb-6 shadow-md rounded-xl">
                <h1 className="text-lg font-semibold">(2021 - Present) Secretary Ministry of Indonesia</h1>
                <p className="mt-5 text-left">My role is Fullstack developer here. I've been contribute to develop any application for Secretary Ministry Employee. The most complex application that i've been made was SIKKP (Sistem Informasi Kehadiran dan Kinerja Pegawai). This Application is used for monitoring presence, performance of the employee and This app also used as reference from performance allowance payment. Beside that, i also contribute to develop SETNEG POINT App. This app is a mobile app that used for recording the employee presence. My role is Backend Developer for SETNEG POINT App</p>
              </div>
              <div className="box pl-6 pr-6 pt-6 pb-6 shadow-md rounded-xl">
                <h1 className="text-lg font-medium">(2019 - 2020) PT. Evotech Distribusi</h1>
                <p className="mt-5 text-left">In PT. Evotech Distribusi, My role was Fullstack Developer. But the different is, We use Outsystems as tool to develop an application. Here, i contribute to develop a mobile app for for the FIF customer. This app is used to redeem some gift from FIF as the appreciation for their customer trust.</p>
              </div>
              <div className="box flex-col pl-6 pr-6 pt-6 pb-6 shadow-md rounded-xl">
                <h1 className="text-lg font-medium">(2018) Illiyin Studio</h1>
                <p className="mt-5 text-left">My role is Fullstack developer here. I've been contribute to develop any application for Secretary Ministry Employee. The most complex application that i've been made was SIKKP (Sistem Informasi Kehadiran dan Kinerja Pegawai). This Application is used for monitoring presence, performance of the employee and This app also used as reference from performance allowance payment. Beside that, i also contribute to develop SETNEG POINT App. This app is a mobile app that used for recording the employee presence. My role is Backend Developer for SETNEG POINT App</p>
              </div>
              {/* <div className="box flex-col pl-6 pr-6 pt-6 pb-6 shadow-md rounded-xl">
                    <h1 className="text-lg font-medium">(2014) PT. KISEL</h1>
                    <p className="mt-5 text-justify">In PT. Evotech Distribusi, My role was Fullstack Developer. But the different is, We use Outsystems as tool to develop an application. Here, i contribute to develop a mobile app for for the FIF customer. This app is used to redeem some gift from FIF as the appreciation for their customer trust.</p>
                  </div> */}
            </div>
          </div>
          <div className="content_12 w-full pt-6">
            <div className='isi_1 pt-16 flex flex-col justify-center w-full'>
              <div className='flex justify-center'>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Experience
