// import { useState } from 'react'
import php from '../assets/php.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import python from '../assets/python.png'
import go from '../assets/go.png'
import mysql from '../assets/mysql.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import codeigniter from '../assets/codeigniter.png'
import laravel from '../assets/laravel.png'
import react from '../assets/react.svg'
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
              <h1 className='title text-6xl'>Hi Everyone!!</h1>
              <h1 className='text-2xl mt-5'>This is Bagas Adi Prayitno</h1>
            </div>
          </div>
          <div className="content_12 w-full pt-6">
            <div className='isi_1 pt-16 flex flex-col justify-center w-full'>
              <div className="line w-full flex justify-center">
                <div className="line-1 mb-10 shadow-2xl"></div>
              </div>
              {/* <div className='flex justify-center'>
                <img src={Banyuwangi_1} alt="" className='w-1/6'/>
              </div> */}
              <div className='flex justify-center mb-14 pl-8 pr-8'>
                <h1>An ordinary guy from Banyuwangi city who have a dream to become an extraordinary guy. Obsessed on Information Technology, especially in software Development. Currently working at Secretary Ministry of Indonesia as a Fullstack Web Developer</h1>
              </div>
              <div className="line w-full flex justify-center">
                <div className="line-1 mb-14 shadow-2xl"></div>
              </div>
              <div className='flex justify-center pl-8 pr-8 mb-14'>
                <h1>I like to learn the technology of Software Development especially in Programming Language. Here some Programming Language, SQL or Framework that i've been learned</h1>
              </div>
              <div className='grid gap-9 justify-items-center pl-8 pr-8 mb-14'>
                <img className='php-img w-12 h-12' src={php} alt="" />
                <img className='php-img w-12 h-12' src={html} alt="" />
                <img className='php-img w-12 h-12' src={css} alt="" />
                <img className='php-img w-12 h-12' src={js} alt="" />
                <img className='php-img w-12 h-12' src={python} alt="" />
                <img className='php-img w-16 h-12' src={go} alt="" />
                <img className='php-img w-12 h-12' src={mysql} alt="" />
                <img className='php-img w-12 h-12' src={bootstrap} alt="" />
                <img className='php-img w-16 h-12' src={tailwind} alt="" />
                <img className='php-img w-14 h-12' src={codeigniter} alt="" />
                <img className='php-img w-12 h-12' src={laravel} alt="" />
                <img className='php-img w-12 h-12' src={react} alt="" />
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
