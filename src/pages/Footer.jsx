import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
import react from '../assets/react.svg'
import js from '../assets/js.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'

const Footer = () => {
    return (
        <>
            <div className='foot_root mt-10'>
                <div className='foot'>
                    {/* <div className="footer">
                        <img className='instagram-img w-6' src={instagram} alt="" />
                        <img className='github-img w-6 ml-3' src={email} alt="" />
                        <img className='github-img w-6 ml-3' src={github} alt="" />
                    </div> */}
                    <div className='footer_1'>
                        <p className="avl awc awo axr text-xs">©2023 Designed By Bagas Adi Prayitno.</p>
                    </div>
                    <div className='footer_2 flex place-items-center'>
                        {/* <p className="avl awc awo axr text-xs">Developed With</p> */}
                        <img className='instagram-img w-6' src={react} alt="" />
                        <img className='instagram-img w-6 ml-3' src={html} alt="" />
                        <img className='instagram-img w-6 ml-3' src={js} alt="" />
                        <img className='instagram-img w-6 ml-3' src={tailwind} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer